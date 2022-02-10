import React from 'react'
import { Typography } from "@mui/material";
const BookList = ({bookList}) => {
  return (
    <div data-test="book-list"> 
        {
          bookList.map(book => (
            <div className="book-item" key={book.name}> 
              <Typography variant='h5' component='h2' className="titles">{book.name}</Typography>
            </div>
          ))
        }
    </div>
  )
}

export default BookList