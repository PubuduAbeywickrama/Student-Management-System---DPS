const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    stdid : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : false
    }
})

const Attendance = mongoose.model("Attendance",attendanceSchema);
module.exports = Attendance;
