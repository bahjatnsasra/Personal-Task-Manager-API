const categoryRepo = require("../database/category")

async function createNewCategory(req, res) {
    try {
        const title = req.body.title
        const newcategory = await categoryRepo.createCategory({title: title})
        res.status(200).send(newcategory)
        res.end()
    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteCategory(req, res) {
    try {
        const categoryId = req.params.id
        await categoryRepo.deleteCategory(categoryId)
        res.status(200).send("category deleted")
        res.end()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createNewCategory,
    deleteCategory
}