const User = require("../model/user")
const Admin = require("../model/Admin")
const Food = require("../model/Food")

const mongoose = require("mongoose")

exports.createUser = async (req, res) => {
    let name = req.body.name || ''
    let psd = req.body.psd  || 'thepsd'
    let addr = req.body.addr || ''
    let loggedIn = false 
    let mobileNo = req.body.mobileNo || ''
    let mail = req.body.mail || ''

    try {const user = await new User({
        name: name,
        mail: mail,
        psd: psd,
        addr: addr,
        loggedIn: loggedIn,
        mobileNo: mobileNo
    }).save()

    console.log(user)
    return res.status(200).send(user)} catch (e) {
        console.log(e)
        return res.status(500).send(e.message)
    }
}

exports.getUser = async (req, res) => {
    let id = req.params.id
    try {
        const user = await User.findOne({_id : id})
        console.log(user)
        if(!id){
            const users = await User.find()
            return res.status(200).send(users)
        }
        return res.status(200).send(user)
    } catch (e) {
        console.log("This is errror ", e)
        return res.status(500).send("Interanl Server Error")
    }
}

exports.loginUser = async (req, res) => {
    let mail = req.body.mail
    let psd = req.body.psd
    console.log("Api called ")
    try {
        console.log("MAil and psd ",mail , psd)
        const user = await User.findOne({ mail: mail, psd: psd })
        if (!user) {
            return res.status(404).send("No User Found")
        }
        console.log(user)
        return res.status(200).send(user)
    } catch (e) {
        return res.status(500).send("Internal Server Error")
    }
}

exports.logoutUser = async (req, res) => {
        try {
            const id = req.params.id
            console.log("Api called logout ")
            const user = await User.findOneAndUpdate({_id : id},{ loggedIn : false})
            console.log("Logged Out successfully")
            return res.status(200).send("loggedOut successfully")
        } catch (e) {
            res.status(500).send()
        }
    }


exports.logoutAll = async (req,res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        return res.status(200).send()
    } catch(e) {
        return res.status(500).send(e.message)
    }
}
    
exports.editProfile = async (req,res) =>{
    const id = req.params.id
    const body = req.body
    try {
        const user = await User.findOneAndUpdate({_id : id},{
           ...body
        },{
            new : true
        })

        console.log("User is ",user)
        return res.status(200).send(user)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}