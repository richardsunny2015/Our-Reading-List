const router = require('express').Router()
const axios = require('axios')
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
