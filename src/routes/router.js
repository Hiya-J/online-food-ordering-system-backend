const express = require("express")
const router = express.Router()

const userController = require("../controller/usercontroller")
const foodController = require("../controller/foodcontroller")
// const auth = require("../middlewares/Auth")


router.post("/create-user", function (req, res) {
    return userController.createUser(req, res)
});

router.post("/login-user", function (req, res) {
    return userController.loginUser(req, res)
});

router.get("/get-user/:id", function (req, res) {
    return userController.getUser(req, res)
});

router.get("/getFoods",function (req,res){
    return foodController.getFoods(req,res)
})

router.get("/get-food/:id", function (req, res) {
    return foodController.getFood(req, res)
})

router.post("/edit-profile/:id",function (req,res){
    return userController.editProfile(req,res)
})

router.post("/logout/:id",function(req,res){
    return userController.logoutUser(req,res)
})

module.exports = router