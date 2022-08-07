const mongoose=require('mongoose')
var newUser =mongoose.model('newUser',{
    regName:{type:String},
    regUserName:{type:String},
    regEmail:{type:String},
    regPassword:{type:String},
    regRePassword:{type:String}
})
module.exports={newUser};