const express = require("express")
const app = express();
const router = express.Router();
const studentDetailsSchema = require("../schema/studentDetails")

router.get("/student" , (req , res) => {
    res.render("index")
})

//insert student details.
router.post("/student" , async (req , res) => {
    const response = await new studentDetailsSchema(req.body);
    const result = await response.save();
    console.log("🚀 ~ file: student.js ~ line 14 ~ router.post ~ result", result)
    res.send(result); 
})

//delte student using build-in id
router.delete("/student/:_id" , async (req , res) => {
    const response = await studentDetailsSchema.findByIdAndDelete(req.params);
    res.send(response);
})

module.exports = router