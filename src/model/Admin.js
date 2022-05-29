const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    devicetoken: [{
        type: String,
    }],

}, {
    timestamps: true
})

const Admin = new mongoose.model("Admin", AdminSchema)

module.exports = Admin