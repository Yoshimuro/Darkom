const Sequelize = require("sequelize")
const sequelize = require('../db')

const Category = sequelize.define("category", {
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
        type: Sequelize.JSON,
        allowNull:false
    }
})

module.exports = Category