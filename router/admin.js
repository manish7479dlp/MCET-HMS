const express = require("express");
const app = express();
const router = express.Router();
const AdminDetails = require("../schema/admin")

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
            res.redirect("/dashboard")
            // res.send(response)
        } else {

            res.status(404).send({msg: "Invalid details"});
        }
        // console.log(data.userId);
    } catch (error) {
        res.send(error);
    }
})


module.exports = router;