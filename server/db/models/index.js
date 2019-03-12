const User = require('./user')
const Book = require('./book')

// ASSOCIATIONS

Book.belongsTo(User)
User.hasMany(Book)

module.exports = {
  User,
  Book
}
