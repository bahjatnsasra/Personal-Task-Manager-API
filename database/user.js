const User = require('../models/user')
const bcrypt = require('bcrypt')

async function createUser(userObject) {
    try {
        const result = await getUserByEmail(userObject)
        if(result){
            throw("user already exist")
        }else{
            const hashedPassword = await bcrypt.hash(userObject.password,10)
            userObject.password = hashedPassword
            let newUser = new User(userObject)
            await newUser.save()
            return newUser
        }
    } catch (error) {
        throw error
    }
}

async function getUserByEmail(userData){
    try {
        const user = await User.findOne({email: userData.email}).exec()
        return user
    } catch (error) {
        throw error
    }
}

async function getUser(userID) {
    try {
        let user = await User.findById(userID)
        if(!user) throw("user not found")
        return user
    } catch (error) {
        throw error
    }
}

async function updateUser(userData, userID) {
    try {
        const user = await User.findByIdAndUpdate(userID, userData)
        if(!user) throw("user not found")
    } catch (error) {
        throw error
    }
}

async function logginUser(userData) {
    try {
        const user = await User.findOne({email: userData.email}).exec()
        if(!user) throw({status: 401 , message: "invalid email or password"})
        const match = await bcrypt.compare(userData.password ,user.password);
        if(!match) throw({status: 401 , message: "invalid email or password"})
        return {user: user}
    } catch (error) {
        throw error
    }
}


async function deleteUser(userID) {
    try {
        await User.findByIdAndDelete(userID)
    } catch (error) {
        throw error
    }
}


module.exports = {
    createUser,
    deleteUser,
    getUser,
    updateUser,
    logginUser
}