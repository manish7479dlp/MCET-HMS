const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://mcethms2022:AePueEu1ipCJOj2m@cluster0.ciqn55k.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dburl)
  .then(() => {
    console.log("DataBase Connection Established.");
  })
  .catch((error) => {
    console.log(error);
  });
