const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    stdid : {
        type : String,
        required : true
    },
    month : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    pay : {
        type : Number,
        required : true
    },
    bal : {
        type : Number,
        required : true
    }
})

const Payment = mongoose.model("Payment",paymentSchema);
module.exports = Payment;
