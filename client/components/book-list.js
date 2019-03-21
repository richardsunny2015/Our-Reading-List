import React from 'react'

const BookList = ({books}) => {
  return (
    <section>
      {books.map(book => (
        <div key={book.id}>
          {book.volumeInfo.imageLinks && (
            <img src={book.volumeInfo.imageLinks.thumbnail} />
          )}
          <h4>Title: {book.volumeInfo.title}</h4>
          <p>Author: {book.volumeInfo.authors.join(', ')}</p>
          <p>Page Count: {book.volumeInfo.pageCount}</p>
          <p>Description: {book.volumeInfo.description}</p>
          <p>Published: {book.volumeInfo.publishedDate}</p>
        </div>
      ))}
    </section>
  )
}

export default BookList
