const Task = require("../models/task")
const User = require("../models/user")
const Category = require("../models/category")


async function createTask(taskData, userID, categoryID) {
    try {
        const newTask = new Task(taskData)
        await newTask.save()
        await User.findByIdAndUpdate({_id:userID},{"$push": {"tasks" : newTask._id}}).exec()
        await Category.findByIdAndUpdate({_id:categoryID},{"$push": {"tasks" : newTask._id}}).exec()
        return newTask
    } catch (error) {
        throw error
    }
}

async function getUserTasks(userId) {
    try {
        const user = await User.findById(userId).populate("tasks").exec()
        if(!user) throw("user not found")
        return user.tasks
    } catch (error) {
        throw error
    }
}

async function deleteTask(taskId) {
    try {
        await Task.findByIdAndDelete(taskId)
    } catch (error) {
        throw error
    }
}

async function updateTask(taskId,taskData) {
    try {
        console.log(taskId);
        const task = await Task.findByIdAndUpdate(taskId,taskData)
        if(!task) throw("task not found")
        return task
    } catch (error) {
        throw error
    }
}


module.exports = {
    createTask,
    getUserTasks,
    deleteTask,
    updateTask
}


