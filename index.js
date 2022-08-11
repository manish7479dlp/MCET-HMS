const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./dbConfig/dbConfig")
const port = 8000;

const studentDetail = require("./router/student")

const staticPath = path.join(__dirname , "public");
const templatePath = path.join(__dirname , "template/views");
const partialsPath = path.join(__dirname , "template/partials");

// console.log(partialsPath);

app.use(express.json())

app.use(express.static(staticPath))
app.set("view engine" , "hbs");
app.set("views" ,templatePath);
hbs.registerPartials(partialsPath);

// Router code start

app.use(studentDetail);

app.get("/" , (req , res) => {
    res.send("This is home page..");
})

app.listen(port , () => {
    console.log("Connecting to the server at Port number: " + port);
});
