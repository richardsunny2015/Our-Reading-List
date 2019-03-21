import React from 'react'

const BookList = ({books}) => {
  return (
    <section>
      {books.map(book => (
        <div key={book.id}>
          {book.thumbnail && <img src={book.thumbnail} />}
          <h4>Title: {book.title}</h4>
          <p>Author: {book.authors.join(', ')}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Description: {book.description}</p>
          <p>Published: {book.publishedDate}</p>
        </div>
      ))}
    </section>
  )
}

export default BookList
