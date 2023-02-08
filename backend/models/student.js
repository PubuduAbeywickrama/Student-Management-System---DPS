const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    stdid : {
        type : String,
        required : true
    },
    fullname : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required :true
    },
    
    parentname : {
        type : String,
        required : true
    },
    contactnumber :{
        type : String,
        required : true
    },
    notes : {
        type : String,
        required :false
    }
})

const Student = mongoose.model("Student",studentSchema);
module.exports = Student;
