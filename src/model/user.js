const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
    name: {
        type: String
    },
    mail: {
        type: String,
    },
    mobileNo: {
        type: String,
    },
    psd: {
        type: String,
    },
    devicetoken: [{
        type: String,
    }],
    loggedIn: {
        type: Boolean,
        default: false
    },
    addr: {
        type: String,
    }

}, {
    timestamps: true
})

const User = new mongoose.model("User", UsersSchema)

module.exports = User