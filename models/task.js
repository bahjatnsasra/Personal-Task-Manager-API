const mongoose = require('mongoose')
const Schema = mongoose.Schema


const taskSchema  = new Schema({
    title : String,
    description : String,
    status : Boolean,
    date: String,
    category : { type: Schema.Types.ObjectId, ref: 'category' },
})

const Task = mongoose.model("task", taskSchema) 

module.exports = Task