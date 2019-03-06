import React from 'react'

const BookList = ({books}) => {
  return (
    <section>
      {books.map(book => (
        <div key={book.id}>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
          <h4>Title: {book.volumeInfo.title}</h4>
          <p>Page Count: {book.volumeInfo.pageCount}</p>
          <p>Published: {book.volumeInfo.publishedDate}</p>
        </div>
      ))}
    </section>
  )
}

export default BookList
