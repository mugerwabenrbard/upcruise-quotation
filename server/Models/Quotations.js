const mongoose = require('mongoose')

const quotationSchema = mongoose.Schema({
    clientName: {type:String, required: true},
    contactPerson: {type:String},
    phone: {type:String},
    email: {type:String, required: true},
    address: {type:String},
    trip: {type:Array, required: true, default:[]},
    contactPersonSupplier: {type:String, required: true},
    notice: {type:String},
    termsOfPayment: {type:String},
    currency: {type:String, required: true},
    beneficiary: {type:String, required: true}
}, {timestamps:true})

module.exports = mongoose.model('quotation', quotationSchema)