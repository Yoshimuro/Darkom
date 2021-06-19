const {Product} = require('../models/models')
const ApiError = require('../error/ApiError');
class ProductController {
    async create(req, res) {
        const {title} = req.body
        const product = await Prodcuct.create({title})
        return res.json(product)
    }
    async getAll(req, res) {

    }
    async delete(req, res){

    }
    async getOne(req, res){

    }

}


module.exports = new ProductController()