import React from 'react'
import Book from './Book'
import BookCI from './BookCI'

function RenderingLists() {
    // const bookList = [
    //     "Book 1",
    //     "Book 2",
    //     "Book 3"
    // ]

    const books = [
        {
            title: "book 1",
            author: "Author One",
            pages: "123"
        },
        {
            title: "book 2",
            author: "Author Two",
            pages: "246"
        },
        {
            title: "book 3",
            author: "Author Three",
            pages: "369"
        },
    ]

//   return (
//     <div>
//         {bookList.map(book => {
//             return <h2>{book}</h2>
//         })}
//         <hr />

//         {books.map(entry => {
//             return (
//                 <div>
//                     <h5>Title: {entry.title}</h5>
//                     <p>Author: {entry.author}</p>
//                     <p>Number of Pages: {entry.pages}</p>
//                     <hr />
//                 </div>
                
//             )
//         })}
//     </div>
//   )

    // return (
    //     <div>
    //         <Book books={books}/>
    //     </div>
    // )

    return (
        <div>
            {/* {
                books.map(book => {
                    return <BookCI book={book}/>
                })
            } */}
            {
                books.map(book => {
                    return <BookCI key={book.title} book={book}/>
                })
            }
        </div>
    )
}

export default RenderingLists