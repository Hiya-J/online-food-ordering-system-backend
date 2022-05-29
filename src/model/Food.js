const mongoose = require("mongoose")

const FoodItemSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    items: [{
        id: {
            type: Number
        },
        itemName: {
            type: String
        },
        price: {
            type: Number
        },
        vegan: {
            type: String
        },
        tag: {
            type: String
        },
        quantity: {
            type: Number
        },
        img: {
            type: String
        }
    }]
    // name: {
    //     type: String,
    //     required: true
    // },
    // price: {
    //     type: Number,
    //     required: true
    // },
    // foodType: {
    //     type: String,
    //     required: true
    // },
    // foodCategory: {
    //     type: String,
    //     required: true
    // }
}, {
    timestamps: true
})

const FoodItem = new mongoose.model("FoodItem", FoodItemSchema)

module.exports = FoodItem   