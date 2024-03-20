const Category = require("../models/category")
const Task = require("../models/task")


async function createCategory(categoryData) {
    try {
        const newCategory = new Category(categoryData)
        await newCategory.save()
        return newCategory
    } catch (error) {
        throw error
    }
}



async function deleteCategory(categoryID) {
    try {
        const category = await Category.findById(categoryID).exec()
        if(category.tasks.length > 0) {
            Task.deleteMany(category.tasks)
        }
        category.deleteOne()
    } catch (error) {
        throw error
    }
}

module.exports = {
    createCategory,
    deleteCategory
}