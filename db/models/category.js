const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
    // validate: {
    //   isEmpty: false
    // }
  }
})

module.exports = Category
