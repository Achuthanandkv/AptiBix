var express=require('express');
var bodyParser=require('body-parser');
var app=express();

const cors=require('cors')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))

var root=require('./controllers/registerController.js');
var root1=require('./controllers/questionController.js');
var root2=require('./controllers/contactController.js');
var mongoose=require('./db');

app.listen(4000,console.log("Port is running successfully"))

app.use('/user',root);
app.use('/ques',root1);
app.use('/message',root2);
