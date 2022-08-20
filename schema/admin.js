const mongoose = require("mongoose");
const AdminDetailsSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    hostelTypes: {
        type: String,
        require: true,
        unique
    }
})
module.exports = new mongoose.model("AdminDetails" , AdminDetailsSchema)