const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const cors = require("cors")
require("./dbConfig/dbConfig")
const port =  process.env.PORT ? process.env.PORT : 8000;

const studentDetail = require("./router/student")
const adminDetails = require("./router/admin")
const staticPath = path.join(__dirname , "public");
const templatePath = path.join(__dirname , "template/views");
const partialsPath = path.join(__dirname , "template/partials");

// console.log(partialsPath);

app.use(cors());
app.use(express.urlencoded({extended: true}))

app.use(express.static(staticPath))
app.set("view engine" , "hbs");
app.set("views" ,templatePath);
hbs.registerPartials(partialsPath);

// Router code start
app.use(express.json())
app.use(studentDetail);
app.use(adminDetails);

app.get("/" , (req , res) => {
   res.render("index")
})
//building detail
app.get("/buildingDetails" , (req , res) => {
   res.render("buildingDetails")
})

// app.get("/dashboard", (req , res) => {
//    res.render("dashboard");
// })



app.listen(port , () => {
    console.log("Connecting to the server at Port number: " + port);
});
