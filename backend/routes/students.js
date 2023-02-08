const router = require("express").Router();
let Student = require("../models/student");


//data add to database
router.route("/add").post((req,res) => {
    const stdid = req.body.stdid;
    const fullname = req.body.fullname;
    const address = req.body.address;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const parentname = req.body.parentname;
    const contactnumber = req.body.contactnumber;
    const notes = req.body.notes;
    

    const newStudent = new Student({
        stdid,
        fullname,
        address,
        gender,
        dob,
        parentname,
        contactnumber,
        notes
    })

    newStudent.save()
        .then(()=>{
            res.json("Student added");
        })
        .catch((err) => {
            console.log(err);
        })

})


//get data or display data from database
router.route("/").get((req,res)=>{
    Student.find()
        .then((students)=>{
            res.json(students);
        })
        .catch((err)=>{
            console.log(err);
        })
})

//update data
//we can use post method also
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {stdid,fullname, address, gender, dob, parentname, contactnumber, notes} = req.body;

    const updateStudent = {
        stdid,
        fullname,
        address,
        gender,
        dob,
        parentname,
        contactnumber,
        notes
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
        .then(()=>{
            res.status(200).send({status : "User Updated"});
        })
        .catch((err)=>{
            res.status(500).send({status: "Error on update data"});
        })
})


//delete data
router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status : "User deleted"});
        })
        .catch((err)=>{
            console.log(err);
        })
})


//get one data set
router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    await Student.findById(userId)
    .then((student)=>{
        res.status(200).send({status : "User fetched", student});
    })
    .catch(()=>{
        res.status(500).send({status : "error with get user"});
    })
})



module.exports = router;