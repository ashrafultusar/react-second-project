
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {
 
  return (
    <>
      <Header></Header>

      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>

      </main>
      
    </>
  )
}

export default App
