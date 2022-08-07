const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/APTI_BIX',(err)=>
{
    if(!err){
        console.log("DB Connected successfully")
    }
    else{
        console.log("Error in DB connection")
    }
})

module.exports=mongoose;