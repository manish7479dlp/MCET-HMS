const mongoose = require("mongoose");
require("dotenv").config();

const dburl = process.env.DATABASE_URL;

mongoose
  .connect(dburl)
  .then(() => {
    console.log("DataBase Connection Established.");
  })
  .catch((error) => {
    console.log(error);
  });
