import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({ blog ,handelBookmark,handelMarkAsRead}) => {
    const { title,cover,author_img,reading_time,author,posted_date,hashtag } = blog;

    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt="" />
            
            <div className='flex justify-between mb-4'>

                <div className='flex '>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-4 '>
                        <h3>{author}</h3>
                        <p>{ posted_date}</p>
</div>

                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handelBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>


                </div>

            </div>

            <h2 className='text-4xl'>{title}</h2>
            
            <p>
            {
                hashtag.map((hash , idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           </p>

            <button
               onClick={()=>handelMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmark:PropTypes.func,
    handelMarkAsRead: PropTypes.func
}

export default Blog;