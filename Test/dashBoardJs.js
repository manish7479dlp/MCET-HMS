// const xlsx = require("xlsx");
// const fetch = require("node-fetch");
// const path = require("path");
// const expres = require("express");
// const app = expres();
// const cors = require("cors");

// app.use(cors());
// app.get("/", (req, res) => {
//   res.send("hii");
// });

// const jsonToExcelData = async (url) => {
//   try {
//     const passoutStudentFolderPath = path.join(
//       __dirname,
//       "../public/passoutStudents/"
//     );

//     let fileName = new Date().getFullYear();

//     fileName =
//       passoutStudentFolderPath + "BoysHostel" + fileName + "Batch.xlsx";

//     const students = await fetch(url);
//     const result = await students.json();
//     console.log(result);

//     const workSheet = xlsx.utils.json_to_sheet(result);
//     const workBook = xlsx.utils.book_new();

//     xlsx.utils.book_append_sheet(workBook, workSheet, "students");

//     //  Generate Buffer

//     xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });

//     //Binary String

//     xlsx.write(workBook, { bookType: "xlsx", type: "binary" });

//     xlsx.writeFile(workBook, fileName);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };

// app.get("/student/storeDetails", async (res, req) => {
//   try {
//     const url = "https://mcet-hms.herokuapp.com/student";

//     jsonToExcelData(url);

//     req.send([{ name: "Manish Kumar" }]);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(3000, () => {
//   console.log("Running");
// });
