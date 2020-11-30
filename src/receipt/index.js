const express = require("express");
const router = express.Router();

const receiptModel = require("../receipt/schema")


router.get("/", async (req, res) => {
    try {
        const receipt = await receiptModel.find()
     res.status(201).send(receipt);
        
    } catch (error) {
        res.send(error)
    }    
})

router.get("/:id", async (req, res) => {
    try {      
        const findReceipt = await receiptModel.findById(req.params.id)
        if (findReceipt) {
            res.send(findReceipt)
        }
        else {
            res.send("Receipt Not Found")
        }
    } catch (error) {
        res.send(error)
    }
})

router.post("/sendreceipt", async (req, res , next) => {
    try {
    const newReceipt = new receiptModel(req.body);
    const postedReceipt = await newReceipt.save();
    console.log(postedReceipt);
    res.status(201).send(postedReceipt);
  } catch (error) {
    next(error);
  }    
})

module.exports = router