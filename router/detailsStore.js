const xlsx = require("xlsx");
const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/storeStudentDetails/:hostelType", async (req, res) => {
  try {
    const url = "https://mcet-hms.herokuapp.com/student";

    const passoutStudentFolderPath = path.join(__dirname, "../passoutStudents/");

    let fileName = new Date().getFullYear();

    const students = await fetch(url);
    let result = await students.json();

    const gender = req.params.hostelType == "Boys" ? "Male" : "Female";
    console.log(gender);

    result = result.filter((eachStudent) => {
      return eachStudent.gender == gender;
    });

    fs.writeFileSync(
      `${passoutStudentFolderPath}${fileName}${req.params.hostelType}HostelBatch.json`,
      JSON.stringify(result)
    );

    const workSheet = xlsx.utils.json_to_sheet(result);
    const workBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(workBook, workSheet, "students");

    //  Generate Buffer

    xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });

    //Binary String

    xlsx.write(workBook, { bookType: "xlsx", type: "binary" });

    fileName = `${passoutStudentFolderPath}${fileName}${req.params.hostelType}HostelBatch.xlsx`;
    xlsx.writeFile(workBook, fileName);

   

    const hostelType = result[0].gender == "Male" ? "Boys" : "Girls";

    res.redirect(`/dashboard/${hostelType}`);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
