const { response } = require("express");
const express = require("express")
const app = express();
const router = express.Router();
const studentDetailsSchema = require("../schema/studentDetails")

// gives student details
router.get("/student" , async (req , res) => {
    const response = await studentDetailsSchema.find();
    res.send(response);
})

router.get("/dashboard" , async (req , res) => {
    const response = await studentDetailsSchema.find();
    const no1y = response.filter((data) => {
        return data.year === 1;
    })
    const no2y = response.filter((data) => {
        return data.year === 2;
    })
    const no3y = response.filter((data) => {
        return data.year === 3;
    })
    const no4y = response.filter((data) => {
        return data.year === 4;
    })

    console.log(no1y.length);
    console.log(no2y.length);
    console.log(no3y.length);
    console.log(no4y.length);

    res.render("dashboard",{
       no1y: no1y.length,
        no2y: no2y.length,
        no3y: no3y.length, 
        no4y: no4y.length
    });
})

// get student details by student (Department and year)
router.get("/student/:department/:year" , async (req , res) => {
    const response = await studentDetailsSchema.find(req.params);
    console.log("🚀 ~ file: student.js ~ line 14 ~ router.get ~ response", response)
    res.send(response);
})

// get student details by student (Year)
router.get("/student/:year" , async (req , res) => {
    console.log(req.params);
    const response = await studentDetailsSchema.find(req.params);
    // console.log("🚀 ~ file: student.js ~ line 22 ~ router.get ~ response", response)
    res.send(response);
})
// get student details by student (Building Number)
router.get("/studentBuilding/:buildingNumber" , async (req , res) => {
    console.log(req.params);
    const response = await studentDetailsSchema.find(req.params);
    // console.log("🚀 ~ file: student.js ~ line 22 ~ router.get ~ response", response)
    res.send(response);
})
// get student details by student (bloodGroup)
router.get("/studentBloodGroup/:bloodGroup" , async (req , res) => {
    console.log(req.params);
    const response = await studentDetailsSchema.find(req.params);
    console.log("🚀 ~ file: student.js ~ line 22 ~ router.get ~ response", response)
    res.send(response);
})

//insert student details.
router.post("/student" , async (req , res) => {
    const response = await new studentDetailsSchema(req.body);
    const result = await response.save();
    console.log("🚀 ~ file: student.js ~ line 14 ~ router.post ~ result", result)
    res.send(result); 
})

//delete particular student using build-in id
router.delete("/student/:_id" , async (req , res) => {
    const response = await studentDetailsSchema.findByIdAndDelete(req.params);
    res.send(response);
})

//update particular student using build-in id
router.patch("/student/:_id" , async (req , res) => {
    const response = await studentDetailsSchema.findByIdAndUpdate(req.params , req.body, {
        new: true,
        useFindAndModify: false
    })
    console.log("🚀 ~ file: student.js ~ line 32 ~ router.patch ~ response", response)
    res.send(response)

    

    });



module.exports = router