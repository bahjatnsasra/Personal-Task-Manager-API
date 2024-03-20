const mongoose = require('mongoose')

function connectToDB(params) {
    try {
        mongoose.connect('mongodb://localhost:27017/PersonalTaskManager');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Connecttion to MongoDB failed");
    }
}

module.exports = {
    connectToDB
}