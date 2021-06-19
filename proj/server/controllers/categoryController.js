const {Category} = require ('../models/models')
const ApiError = require('../error/ApiError')


class CategoryController {
    async create(req, res) {
        const {title} = req.body
        const category = await Category.create({title})
        return res.json(category)

    }
    async getAll(req, res) {

    }
    async delete(req, res){

    }

}


module.exports = new CategoryController()