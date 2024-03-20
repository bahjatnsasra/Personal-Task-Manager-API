const express = require("express");
const router = express.Router();
const verify = require('../middleware/verifyJWT')
const categoryController = require("../controller/categoryController")


router.post("/create",verify.verifyJWT, categoryController.createNewCategory)
router.delete("/delete/:id",verify.verifyJWT, categoryController.deleteCategory)



module.exports = router;
