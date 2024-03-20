const taskRepo = require("../database/task")

async function createNewTask(req, res) {
    try {
        const title = req.body.title
        const description = req.body.description
        const status = req.body.status
        const date = req.body.date
        const userId = req.body.userId
        const CategoryID = req.body.categoryId

        const newTask = await taskRepo.createTask({
            title: title,
            date: date,
            status: status,
            description: description
        },userId,CategoryID)

        res.status(200).send(newTask)
        res.end()
    } catch (error) {
        res.status(500).send(error)
    }
}

async function getUserTasks(req, res) {
    try {
        const userID = req.params.id
        const tasks = await taskRepo.getUserTasks(userID)
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteTask(req, res) {
    try {
        const taskID = req.params.id
        await taskRepo.deleteTask(taskID)
        res.status(200).send("task deleted")
    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateTask(req, res) {
    try {
        const taskID = req.params.id
        const taskData = req.body
        const task = await taskRepo.updateTask(taskID ,taskData)
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createNewTask,
    getUserTasks,
    deleteTask,
    updateTask
}