const express = require("express");
const router = express.Router();

const receiptModel = require("../receipt/schema");
const userModel = require("../users/schema");


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

router.delete("/delete/:id", async (req, res, next) => {
    const receiptToDelete = await receiptModel.findByIdAndDelete(req.params.id)
    console.log(receiptToDelete)
    res.send("Deleted")
})

module.exports = router