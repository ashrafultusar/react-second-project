import PropTypes from 'prop-types';
import { FaBeer } from "react-icons/fa";

const Blog = ({ blog }) => {
    const { title,cover,author_img,reading_time,author,posted_date,hashtag } = blog;

    return (
        <div>
            <img src={cover} alt="" />
            
            <div className='flex justify-between'>

                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3>{author}</h3>
                        <p>{ posted_date}</p>
</div>

                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button><FaBeer></FaBeer></button>
                </div>

            </div>

            <h2 className='text-4xl'>{title}</h2>
            
            {
                hashtag.map((hash , idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;