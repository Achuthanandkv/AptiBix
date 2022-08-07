const mongoose=require('mongoose')
var newQuestion=mongoose.model('newQuestion',{
    add_Choice:{type:Number},
    add_Question:{type:String},
    add_Answer_1:{type:String},
    add_Answer_2:{type:String},
    add_Answer_3:{type:String},
    add_Answer_4:{type:String},
    add_Correct_Answer:{type:String},
})
module.exports={newQuestion};