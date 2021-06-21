const {Category} = require ('../models/models')
const uuid = require('uuid')
const path = require ('path')
const ApiError = require('../error/ApiError')


class CategoryController {
    async create(req, res, next) {
        try {
            let {title,description} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const category = await Category.create({id, title, description});
            return res.json(category)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }
    async getAll(req, res) {

    }
    async delete(req, res){

    }

}


module.exports = new CategoryController()