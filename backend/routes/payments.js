const router = require("express").Router();
let Payment = require("../models/payment");


//data add to database
router.route("/payAdd").post((req,res) => {
    const stdid = req.body.stdid;
    const month = req.body.month;
    const date = req.body.date;
    const pay = req.body.pay;
    const bal = req.body.bal;
    

    const newPayment = new Payment({
        stdid,
        month,
        date,
        pay,
        bal
    })

    newPayment.save()
        .then(()=>{
            res.json("Payment added");
        })
        .catch((err) => {
            console.log(err);
        })

})


//get data or display data from database
router.route("/").get((req,res)=>{
    Payment.find()
        .then((payment)=>{
            res.json(payment);
        })
        .catch((err)=>{
            console.log(err);
        })
})

//update data
//we can use post method also
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {stdid,month, date, pay, bal} = req.body;

    const updatePayment = {
        stdid,
        month,
        date,
        pay,
        bal
    }

    const update = await Payment.findByIdAndUpdate(userId, updatePayment)
        .then(()=>{
            res.status(200).send({status : "Payment Updated"});
        })
        .catch((err)=>{
            res.status(500).send({status: "Error on update data"});
        })
})


//delete data
router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Payment.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status : "Payment deleted"});
        })
        .catch((err)=>{
            console.log(err);
        })
})


//get one data set
router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    await Payment.findById(userId)
    .then((payment)=>{
        res.status(200).send({status : "User fetched", payment});
    })
    .catch(()=>{
        res.status(500).send({status : "error with get payment"});
    })
})



module.exports = router;