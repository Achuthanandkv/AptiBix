var express=require('express');
var root1=express.Router();

var objectId=require('mongoose').Types.ObjectId;

var {newQuestion}=require('../models/questionModel');


root1.post('/addq',(req,res)=>{
    console.log("test")                                                 //for adding question   
    var new_Question = new newQuestion({
    
    add_Choice:req.body.add_Choice,
    add_Question:req.body.add_Question,
    add_Answer_1:req.body.add_Answer_1,
    add_Answer_2:req.body.add_Answer_2,
    add_Answer_3:req.body.add_Answer_3,
    add_Answer_4:req.body.add_Answer_4,
    add_Correct_Answer:req.body.add_Correct_Answer,
    }) 
    new_Question.save((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log("Error in adding question")
        }
    })
});

 
//for displaying question 
root1.get('/',(req,res)=>{
    newQuestion.find((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log("Error in fetching questions")
        }
    })
});              

//for editing
root1.get('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such Record")
    }
    else{
        newQuestion.findById(req.params.id,(err,data)=>{
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in fetching questions")
            }
        })
    }
    });  
    
    root1.put('/:id',(req,res)=>{
        if(!objectId.isValid(req.params.id)){
            res.send("No such Record")
        }
        else{
        var qs2={
            add_Choice:req.body.add_Choice,
            add_Question:req.body.add_Question,
            add_Answer_1:req.body.add_Answer_1,
            add_Answer_2:req.body.add_Answer_2,
            add_Answer_3:req.body.add_Answer_3,
            add_Answer_4:req.body.add_Answer_4,
            add_Correct_Answer:req.body.add_Correct_Answer

        }
        newQuestion.findByIdAndUpdate(req.params.id,{$set:qs2},{new:true},(err,data)=>{
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in updating")
            }
        })
    }
})

root1.delete('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such question")
    }
    else{
        newQuestion.findByIdAndRemove(req.params.id,(err,data)=>{
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in delete data")
            }
        })
    }
})

module.exports=root1;

