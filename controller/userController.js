const userRepo = require("../database/user")
const jwt = require('jsonwebtoken')
require("dotenv").config();

async function registerUser(req, res) {
    try {
        const newUser = await userRepo.createUser(req.body);
        res.status(200).send(newUser);
        res.end();
    } catch (error) {
        res.status(500).send(error);
    }
}


async function getUser(req, res) {
    try {
        const userID = req.params.id;
        const user = await userRepo.getUser(userID);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteUser(req, res) {
    try {
        const userID = req.params.id;
        const user = await userRepo.deleteUser(userID);
        res.status(200).send("user Deleted");
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateUser(req, res) {
    try {
        const userID = req.params.id;
        const userData = req.body;
        const user = await userRepo.updateUser(userData,userID);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
async function logginUser(req,res) {
    try {
        const userData = req.body;
        const user = await userRepo.logginUser(userData);
        const accessToken = jwt.sign(
            {"userName": user.username},
            process.env.ACCESS_TOKEN_SECRET,
        )
        res.status(200).json({accessToken})
        res.end()
    } catch (error) {
        res.status(error.status).json({message: error.message});
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    registerUser,
    logginUser
}