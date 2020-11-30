const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true })

const userModel = model("users", userSchema);

module.exports = userModel;