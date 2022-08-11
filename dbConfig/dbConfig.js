const mongoose = require("mongoose");
const dburl = "mongodb+srv://manish7479dlp:WGgwv3gheMJa6bqv@cluster0.xlyrwg7.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dburl).then(() => {
    console.log("DataBase Connection Established.");
}).catch((error) => {
    console.log(error);
})