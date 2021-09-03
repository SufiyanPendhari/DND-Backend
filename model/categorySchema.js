const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    categorySize:{
        type:Number,
        required:true
    }
})

const CategorySchema = mongoose.model('category',Schema)

module.exports = CategorySchema