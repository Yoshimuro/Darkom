const category = require('./category')
const subCategory = require('./subCategory')
const product = require('./product')
const request = require('./request')
const user = require('./user')

category.hasMany(subCategory)
subCategory.hasMany(product)

module.exports = {
    category,
    subCategory,
    product,
    request,
    user
}

