const User = require("../model/user")
const Admin = require("../model/Admin")
const Food = require("../model/Food")

const mongoose = require("mongoose")

exports.getFood = async (req, res) => {
    let id = req.params.id
    // if(!id){
    //     const food = await Food.find()
    //     return res.status(200).send(food)
    // }
    try {
        const food = await Food.findOne({id : id})
        if (!food) {
            return res.status(404).send(food)
        }
        console.log(food)
        return res.status(200).send(food)
    } catch (e) {
        console.log("Error in food get request ",e)
        return res.status(500).send("Internal Server Error")
    }
}

exports.getFoods = async (req,res) => {
    console.log("API called getfoods")
    const foods = await Food.find()
    console.log(foods)
    return res.status(200).send(foods)
}