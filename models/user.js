const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema  = new Schema({
    username : String,
    password : String,
    email : String,
    tasks : [{type: Schema.Types.ObjectId, ref:"task"}]
})

const User = mongoose.model("user", userSchema) 

module.exports = User