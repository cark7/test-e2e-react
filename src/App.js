import React, {useState, useEffect} from 'react'
import { Typography } from "@mui/material";
import BookList from './components/BookList'
import { api } from "./services/api";
function App() {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    api.get('books').then(res => {
      console.log('resp ', res)
      setBooks(res.data)
    }).catch(error => {
      console.log('error')
    })
  }, [])
  
  return (
    <>
      <Typography variant='h2' component='h2' data-test="heading">ola Dev!</Typography>
      
      {books && //books.length > 0 &&
        <BookList bookList={books}/>
      }
    </>
  );
}

export default App;
