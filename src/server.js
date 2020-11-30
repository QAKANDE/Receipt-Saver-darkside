const express = require("express");
const mongoose = require("mongoose");
const receipt = require("../src/receipt/index")
const users = require("../src/users/index")
const cors = require("cors");





const server = express();

const port = process.env.PORT || 3003;
server.use(cors());
server.use(express.json());
server.use("/users", users);
server.use("/receipt", receipt);


mongoose.connect("mongodb+srv://kudzayi:kudzayi@cluster0.gvwsa.mongodb.net/Receipts?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    server.listen(port, () => {
      console.log("Running on port", port);
    })
  )
  .catch((err) => console.log(err));