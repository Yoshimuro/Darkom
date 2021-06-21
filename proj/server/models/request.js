const Sequelize = require("sequelize")
const sequelize = require('../db')

const Request = sequelize.define("request", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    phone_number:{
        type: Sequelize.CHAR,
        allowNull:false
    },
    state:{
      type: Sequelize.STRING
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    },
    commentary:{
        type: Sequelize.TEXT
    }
})

module.exports = Request