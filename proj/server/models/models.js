const sequelize = require('../db')
const {UUIDV4} = require("sequelize");
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.STRING, primaryKey: true, defaultValue: UUIDV4},
    login: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, defaultValue: UUIDV4},
    title: {type: DataTypes.STRING, unique: true, allowNull:false},
    description: {type: DataTypes.TEXT, allowNull:false},
    img: {type: DataTypes.STRING, allowNull:false}
})
const SubCategory = sequelize.define('subCategory', {
    id: {type: DataTypes.INTEGER, primaryKey: true, defaultValue: UUIDV4},
    title: {type: DataTypes.STRING, unique: true, allowNull:false},
    description: {type: DataTypes.TEXT, allowNull:false},
    img: {type: DataTypes.STRING, allowNull:false}
})
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, defaultValue: UUIDV4},
    title: {type: DataTypes.STRING, unique: true, allowNull:false},
    description: {type: DataTypes.TEXT, allowNull:false},
    img: {type: DataTypes.STRING, allowNull:false}
})
const Requests = sequelize.define('requests', {
    id: {type: DataTypes.INTEGER, primaryKey:true, defaultValue: UUIDV4},
    name: {type: DataTypes.STRING, allowNull: false},
    phone_number: {type: DataTypes.CHAR, allowNull:false},
    email: {type: DataTypes.STRING, allowNull:false},
    category_name: {type: DataTypes.STRING, allowNull:false},
    description: {type: DataTypes.TEXT},
    state:{type: DataTypes.STRING}
})

Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)

SubCategory.hasMany(Product)
Product.belongsTo(SubCategory)

Requests.hasOne(Category)
Category.belongsTo(Requests,{foreignKey:'category_name'})


module.exports = {
        Category,
        SubCategory,
        Product,
        User,
        Requests
}



