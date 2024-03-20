const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema  = new Schema({
    title : String,
    tasks : [{type: Schema.Types.ObjectId, ref:"task"}]
})

const Category = mongoose.model("category", categorySchema) 

module.exports = Category