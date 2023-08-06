import React from 'react'

function Book(props) {
  return (
    <div>
        {props.books.map(entry => {
            return (
                <div key={entry.title}>
                    <h5>Title: {entry.title}</h5>
                    <p>Author: {entry.author}</p>
                    <p>Number of Pages: {entry.pages}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Book