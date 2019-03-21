function parseBooks(books) {
  const fields = ['authors', 'description', 'pageCount', 'publishedDate']
  console.log('What is this?', books[0])
  return books.map(book => {
    const parsed = {id: book.id}
    for (let i = 0; i < fields.length; i++) {
      if (book.volumeInfo.hasOwnProperty(fields[i]))
        parsed[fields[i]] = book.volumeInfo[fields[i]]
    }
    if (book.volumeInfo.hasOwnProperty('imageLinks'))
      parsed.thumbnail = book.volumeInfo.imageLinks.thumbnail
    return parsed
  })
}

module.exports = parseBooks
