import React from 'react'

function BookCI(props) {
    const book = props.book

  return (
    <div>
        <div key={book.title}>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
    </div>
  )
}

export default BookCI