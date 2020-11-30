const express = require("express");
const router = express.Router();

const userModel = require("../users/schema")


router.get("/", async (req, res) => {
    try {
        const user = await userModel.find()
        res.send(users);
        console.log(users)     
    } catch (error) {
        res.send(error)
    }    
})


router.post("/newUser", async (req, res , next) => {
      try {
    const newUser = new userModel(req.body);
    const postedUser = await newUser.save();
    res.status(201).send(postedUser);
  } catch (error) {
    next(error);
  }  
    
})

router.post("/login", async (req, res) => {
    try {
        const secretKey = "d41819c207e9f5225973cfb178f7395884646912c7d9979ca218722f7dd0f3d70a1f716adbce947db3c968d0b8f47966"
       const user = await userModel.find()
        const filteredUser = user.filter((user => user.email === req.body.email))
        console.log("filter" , filteredUser)
        if (filteredUser && req.body.secretKey === secretKey) {    
            res.send(filteredUser)  
        }
        else {
            console.log("User Not Found")
        }  
    } catch (error) {
        res.send(error)
    }
  
})


module.exports = router