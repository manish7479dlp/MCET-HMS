const { response } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const studentDetailsSchema = require("../schema/studentDetails");

// gives student details
router.get("/student", async (req, res) => {
  try {
    const response = await studentDetailsSchema.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

router.get("/dashboard/:hostelType", async (req, res) => {
  try {
    const parameter = req.params.hostelType === "Boys" ? "Male" : "Female";
    console.log(parameter);
    const response = await studentDetailsSchema.find({ gender: parameter });
    console.log(response);
    const no1y = response.filter((data) => {
      return data.year == 1;
    });
    const no2y = response.filter((data) => {
      return data.year == 2;
    });
    const no3y = response.filter((data) => {
      return data.year == 3;
    });
    const no4y = response.filter((data) => {
      return data.year == 4;
    });

    console.log(no1y.length);

    res.render("dashboard", {
      no1y: no1y.length,
      no2y: no2y.length,
      no3y: no3y.length,
      no4y: no4y.length,
      hostelType: req.params.hostelType,
    });
  } catch (error) {
    res.send(error);
  }
});

// get student details by student (Department and year)
router.get("/student/:year/:department", async (req, res) => {
  console.log(req.params);
  try {
    const response = await studentDetailsSchema.find(req.params);
    console.log(
      "🚀 ~ file: student.js ~ line 14 ~ router.get ~ response",
      response
    );
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// get student details by student (Year)
router.get("/student/:year", async (req, res) => {
  try {
    console.log(req.params);
    const response = await studentDetailsSchema.find(req.params);
    // console.log("🚀 ~ file: student.js ~ line 22 ~ router.get ~ response", response)
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
// get student details by student (Building Number)
router.get("/studentBuilding/:buildingNumber", async (req, res) => {
  try {
    console.log(req.params);
    const response = await studentDetailsSchema.find(req.params);
    // console.log("🚀 ~ file: student.js ~ line 22 ~ router.get ~ response", response)
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
// get student details by student (bloodGroup)
router.get("/studentBloodGroup/:bloodGroup", async (req, res) => {
  try {
    console.log(req.params);
    const response = await studentDetailsSchema.find(req.params);
    console.log(
      "🚀 ~ file: student.js ~ line 22 ~ router.get ~ response",
      response
    );
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

//insert student details.
router.post("/student", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      mob: req.body.mob,
      aadhar: req.body.aadhar,
      bloodGroup: req.body.bloodGroup,
      address: req.body.address,
      fathersName: req.body.fathersName,
      fathersMob: req.body.fathersMob,
      buildingNumber: req.body.buildingNumber,
      roomType: req.body.roomType,
      year: req.body.year,
      department: req.body.department,
      gender: req.body.gender,
    };
    const response = await new studentDetailsSchema(data);
    const result = await response.save();
    console.log(
      "🚀 ~ file: student.js ~ line 14 ~ router.post ~ result",
      result
    );
    const hostelType = result.gender == "Male" ? "Boys" : "Girls";
    res.redirect(`/dashboard/${hostelType}`);
  } catch (error) {
    res.send(error);
  }
});

//delete particular student using build-in id
router.delete("/student/:_id", async (req, res) => {
  try {
    const response = await studentDetailsSchema.findByIdAndDelete(req.params);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

//update particular student using build-in id
router.patch("/student/:_id", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      mob: req.body.mob,
      aadhar: req.body.aadhar,
      bloodGroup: req.body.bloodGroup,
      address: req.body.address,
      fathersName: req.body.fathersName,
      fathersMob: req.body.fathersMob,
      buildingNumber: req.body.buildingNumber,
      roomType: req.body.roomType,
      year: req.body.year,
      department: req.body.department,
      gender: req.body.gender,
    };
    const response = await studentDetailsSchema.findByIdAndUpdate(
      req.params,
      data,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(
      "🚀 ~ file: student.js ~ line 32 ~ router.patch ~ response",
      response
    );
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

//update particular student using build-in id (by post method because form doesnot support pathch)
router.post("/student/:_id", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      mob: req.body.mob,
      aadhar: req.body.aadhar,
      bloodGroup: req.body.bloodGroup,
      address: req.body.address,
      fathersName: req.body.fathersName,
      fathersMob: req.body.fathersMob,
      buildingNumber: req.body.buildingNumber,
      roomType: req.body.roomType,
      year: req.body.year,
      department: req.body.department,
      gender: req.body.gender,
    };
    const response = await studentDetailsSchema.findByIdAndUpdate(
      req.params,
      data,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(
      "🚀 ~ file: student.js ~ line 32 ~ router.patch ~ response",
      response
    );
    const hostelType = response.gender == "Male" ? "Boys" : "Girls";
    console.log(`/dashboard/${hostelType}`);
    res.redirect(`/dashboard/${hostelType}`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
