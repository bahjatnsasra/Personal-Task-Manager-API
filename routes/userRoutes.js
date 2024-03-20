const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")
const taskController = require("../controller/taskController")
const verify = require('../middleware/verifyJWT')


router.post("/register", userController.registerUser)
router.post("/login", userController.logginUser)
router.delete("/delete/:id",verify.verifyJWT, userController.deleteUser)
router.patch("/update/:id",verify.verifyJWT, userController.updateUser)
router.get("/get/:id",verify.verifyJWT, userController.getUser)
router.get("/tasks/:id",verify.verifyJWT, taskController.getUserTasks)



module.exports = router;
