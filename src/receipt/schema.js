const { model, Schema } = require("mongoose");

const receiptSchema = new Schema({
    quantity: { type: String, required: true },
    price: { type: String, required: true },
    date: { type: String, required: true },  
}, { timestamps: true })

const receiptModel = model("receiptDetails", receiptSchema);

module.exports = receiptModel;