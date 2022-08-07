var express= require('express');
var root=express.Router();

var objectId=require('mongoose').Types.ObjectId;

var {newUser}=require('../models/registerModel');

//for inserting newuser in register page
root.post('/reg',(req,res)=>{
  
    var new_User= new newUser({
        regName:req.body.regName,
        regUserName:req.body.regUserName,
        regEmail:req.body.regEmail,
        regPassword:req.body.regPassword,
        regRePassword:req.body.regRePassword
    })
    console.log( req.body.register_Name)
    new_User.save((err,data)=>{
        if(!err){
            res.send(data);
        }
        else(
            console.log("Error in inserting data")
        )
    })
});

//for display in admin student list

root.get('/',(req,res)=>{
    newUser.find((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log("Error in fetching User details")
        }
    })
});


root.get('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such record");
    }
    else{
        newUser.findById(req.params.id,(err,data)=>{                              //for edit data retrieve function
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in edit data")
            }
        })
    }
});
root.put('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such record");
    }
    else{
        var user2={
            regName:req.body.regName,
        regUserName:req.body.regUserName,
        regEmail:req.body.regEmail,
        regPassword:req.body.regPassword,
        regRePassword:req.body.regRePassword
        }
        newUser.findByIdAndUpdate(req.params.id,{$set:user2},{new:true},(err,data)=>{                      //for update data function
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in update data")
            }
        })
    }
})
root.delete('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such record");
    }
    else{
        newUser.findByIdAndRemove(req.params.id,(err,data)=>{                              //for delete data function
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in delete data")
            }
        })
    }
})

root.post('/logchk',(req,res)=>{
    var log_User= new newUser({
        logName:req.body.logName,
        logPass:req.body.logPass
    })
    newUser.find({$and:[{regUserName:req.body.logName},{regPassword:req.body.logPass}]},(err,data)=>{
        if(data){
            console.log(res)
            //res.send(data);
        }
        else(
            console.log("Error in login"+JSON.stringify(err,undefined,2))
        )
    })
})

module.exports=root;