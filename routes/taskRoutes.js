const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController")
const verify = require('../middleware/verifyJWT')

router.post("/create",verify.verifyJWT,  taskController.createNewTask)
router.delete("/delete/:id",verify.verifyJWT,  taskController.deleteTask)
router.patch("/update/:id",verify.verifyJWT,  taskController.updateTask)

module.exports = router;
