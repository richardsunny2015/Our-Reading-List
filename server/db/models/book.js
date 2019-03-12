const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('booklist', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  authors: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  thumbnail: Sequelize.STRING,
  pageCount: Sequelize.INTEGER,
  description: Sequelize.TEXT
})

module.exports = Book
