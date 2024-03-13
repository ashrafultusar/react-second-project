import { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handelBookmark,handelMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetch('blog.json')
        .then(res => res.json())
      .then(data => setBlogs(data))
    },[])
  

    return (
        <div className='md:w-2/3'>
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handelBookmark={handelBookmark} handelMarkAsRead={handelMarkAsRead}></Blog>)
            }
            
        </div>
    );
};

Blogs.prototypes = {
  handelBookmark: PropTypes.func,
  handelMarkAsRead: PropTypes.func
}

export default Blogs;