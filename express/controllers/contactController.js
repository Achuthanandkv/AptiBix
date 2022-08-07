var express=require('express');
var root2=express.Router();

var objectId=require('mongoose').Types.ObjectId;

var {contact_Form}=require('../models/contactModel');

root2.post('/contact',(req,res)=>{
    var contactForm= new contact_Form({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    })
    contactForm.save((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log("Error sending message to admin")
        }
    })
});

root2.get('/message',(req,res)=>{
    contact_Form.find((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log("Error in fetching message to admin")
        }
    })
});


module.exports=root2;