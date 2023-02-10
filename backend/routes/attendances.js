const router = require("express").Router();
let Attendance = require("../models/attendance");


//data add to database
router.route("/atdAdd").post((req,res) => {
    const stdid = req.body.stdid;
    const date = req.body.date;
    
    

    const newAtd = new Attendance({
        stdid,
        date
    })

    newAtd.save()
        .then(()=>{
            res.json("Attendance added");
        })
        .catch((err) => {
            console.log(err);
        })

})


//get data or display data from database
router.route("/atd").get((req,res)=>{
    Attendance.find()
        .then((attendances)=>{
            res.json(attendances);
        })
        .catch((err)=>{
            console.log(err);
        })
})


//delete data
router.route("/atd/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Attendance.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status : "Record deleted"});
        })
        .catch((err)=>{
            console.log(err);
        })
})




module.exports = router;