const express = require("express");
const app = express();
const router = express.Router();
const AdminDetails = require("../schema/admin")
const jwt = require("jsonwebtoken");

const authCheck = require("../middleware/authCheck");

router.get("/admin" , async (req , res) => {
    try {
        const response = await AdminDetails.find();
        console.log("🚀 ~ file: admin.js ~ line 9 ~ router.get ~ response", response)
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

router.post("/admin" , async (req , res) => {
    try {
        const response = new AdminDetails(req.body);
        const result = await response.save();
        console.log("🚀 ~ file: admin.js ~ line 20 ~ router.patch ~ result", result);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})
router.post("/adminAuth" , async (req , res) => {
    try {
        const data = req.body;
        let response = await AdminDetails.find();
        response = response[0];


        if(response.userId == data.userId && response.password === data.password) {
            const token = jwt.sign({ userID: response._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
            res.status(201).send({"status": "success", "message" : "login success",token ,"hostelType": response.hostelType})
        } else {

            res.status(401).send({"status": "fail", "message" : "Invalid userId or password"})
        }
        // console.log(data.userId);
    } catch (error) {
        res.send(error);
    }
})


module.exports = router;