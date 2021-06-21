const Sequelize = require("sequelize")
const sequelize = require('../db')

const Product = sequelize.define("product", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    imgUrl:{
        type: Sequelize.CHAR,
        allowNull:false
    }
})

module.exports = Product