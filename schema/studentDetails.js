const mongoose = require("mongoose");

const studentDetailsSchema = mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    mob: {
        type : Number,
        required: true,
        unique: true
    },
    aadhar: {
        type : Number,
        required: true,
        unique: true
    },
    bloodGroup : {
        type : String,
        required : true
    },
    address: {
        type: String,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    fathersMob: {
        type: Number,
        required: true
    },
    buildingNumber: {
        type : String,
        required : true
    },
    roomType: {
        type: String,
        required : true
    },
    year: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    }

})

module.exports = new mongoose.model("studentDetail" , studentDetailsSchema);