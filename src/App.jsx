
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
 
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handelBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  

  const handelMarkAsRead = (id ,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    // remove bookmark on mark as read
    const remainingBookmarks=bookmarks.filter(bookmark=> bookmark.id !== id)
setBookmarks(remainingBookmarks)

  }


  return (
    <>
      <Header></Header>

      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handelBookmark={handelBookmark} handelMarkAsRead={handelMarkAsRead} ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </main>
      
    </>
  )
}

export default App
