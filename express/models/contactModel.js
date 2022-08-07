const mongoose=require('mongoose')
var contact_Form=mongoose.model('contactForm',{
    conName:{type:String},
    conEmail:{type:String},
    subject:{type:String},
    message:{type:String}
})
module.exports={contact_Form};