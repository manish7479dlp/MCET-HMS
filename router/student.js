const { response } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const studentDetailsSchema = require("../schema/studentDetails");
const checkUserAuth = require("../middleware/authCheck")

// router.use("/student" , checkUserAuth);
// router.use("/dashboard/:hostelType" , checkUserAuth);
// router.use("/student/:year/:department" , checkUserAuth);
// router.use("/student/:year" , checkUserAuth);
// router.use("/studentBuilding/:buildingNumber" , checkUserAuth);
// router.use("/studentName/:name" , checkUserAuth);
// router.use("/studentAadhar/:aadhar" , checkUserAuth);
// router.use("/studentBloodGroup/:bloodGroup" , checkUserAuth);
// router.use("/studentBloodGroup/:bloodGroup" , checkUserAuth);

// gives student details
router.get("/student",checkUserAuth, async (req, res) => {
  try {
    const response = await studentDetailsSchema.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

router.get("/dashboard/:hostelType",async (req, res) => {
  try {
    const parameter = req.params.hostelType === "Boys" ? "Male" : "Female";
    const response = await studentDetailsSchema.find({ gender: parameter });
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
//  res.send(response);

    res.render("dashboard", {
      no1y: no1y.length,
      no2y: no2y.length,
      no3y: no3y.length,
      no4y: no4y.length,
      hostelType: req.params.hostelType,
      firstYearPercentage: parseInt(no1y.length / response.length * 100),
      secondYearPercentage: parseInt(no2y.length / response.length * 100),
      thirdYearPercentage: parseInt(no3y.length / response.length * 100),
      fourthYearPercentage: parseInt(no4y.length / response.length * 100),
    });
  } catch (error) {
    res.send(error);
  }
});

// get student details by student (Department and year)
router.get("/student/:year/:department",checkUserAuth, async (req, res) => {
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
router.get("/student/:year",checkUserAuth, async (req, res) => {
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
router.get("/studentBuilding/:buildingNumber",checkUserAuth, async (req, res) => {
  try {
    console.log(req.params);
    const response = await studentDetailsSchema.find(req.params);
    // console.log("🚀 ~ file: student.js ~ line 22 ~ router.get ~ response", response)
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
// get student details by student (Full Name)
router.get("/studentName/:name",checkUserAuth, async (req, res) => {
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
// get student details by student (Aadhar Card number)
router.get("/studentAadhar/:aadhar",checkUserAuth, async (req, res) => {
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

// get student details by student (bloodGroup)
router.get("/studentBloodGroup/:bloodGroup",checkUserAuth, async (req, res) => {
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
      email: req.body.email,
    };
    const response = await new studentDetailsSchema(data);
    const result = await response.save();

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
      email: req.body.email,
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
      email: req.body.email,
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

router.get("/studentDetails/:year", async (req, res) => {
  try {
    res.render("studentDetailsPage",{
      year: req.params.year
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
