import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'


const API_URL = 'https://www.googleapis.com/books/v1/volumes?'


function App() {

  const [books, setBooks] = useState([])

  const [bookText, setBookText] = useState('')


  //async funct to call api and retrieve data:
  const searchBooks = async (title) => {
    console.log('tapping into searchBooks:')
    const response = await fetch(`${API_URL}q=${title}&key=${import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY}&maxResults=20`)
    
    const data = await response.json();
    console.log(data)
    
    setBooks(data.items)
    return true

  }

  // React Hook using string search to test API
  useEffect(() => {
    searchBooks('python')
  }, [])

  return (
    <div className='app'>
      <h1>Book Tracker</h1>

      <div>
      <div className="inputbox">
        <input 
        placeholder='Search book here:'
        
        // create setter/getter funct to access text and method request 
        value={bookText} // actual text being sent to input element
        onChange={(e) => setBookText(e.target.value)}
        /> 
      </div>
      <button id='search-btn' className='search' onClick={() => searchBooks(bookText)}>SEARCH</button>
      
      </div>
      <br></br>
      <h4 id='note-info'>(Search stops at 20 references. Default search is Python)</h4>
      
      {console.log('in main portion:')}
      {console.log(`book amount == ${books.length}`)}
      
      {
        // books?.length > 0 
        books.length > 0 
        ? ( <div className='container'>
          {console.log(books.length)}
          {console.log('in main portion:')}

          {books.map((book, index) => (
            <>
              <BookCard book={book}/>
            </>
          ))}
          </div>
        ) : (<div className='empty'>
            <h2>No Books Found</h2>
          </div>
        ) 
    }

    </div>
  )
}

export default App

