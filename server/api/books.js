const router = require('express').Router()
const axios = require('axios')
const {Book} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  const {q} = req.query
  const bookQuery = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${
      process.env.GOOGLE_API_KEY
    }&fields=items(id,volumeInfo(authors,title,description,pageCount,imageLinks,publishedDate,language))`
  )
  const {data} = bookQuery
  res.status(200).send(data.items)
})

router.post('/', async (req, res, next) => {
  const {userId, title, authors, thumbnail, pageCount, description} = req.body
  const requestedBook = {
    userId,
    title,
    authors,
    thumbnail,
    pageCount,
    description
  }
  const [createdBook, wasCreated] = await Book.findOrCreate({
    where: requestedBook
  })
  res.status(201).send(createdBook)
})
