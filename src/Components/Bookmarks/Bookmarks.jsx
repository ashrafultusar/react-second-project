import PropTypes from 'prop-types'
import Bookmarked from '../Bookmarked/Bookmarked';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4">

            <div>
                <h3>Reading Time: {readingTime} </h3>
</div>

            <h2 className="text-3xl  text-center">Bookmarked: {bookmarks.length}</h2>
            
            {
                bookmarks.map((bookmark,idx) => <Bookmarked key={idx} bookmark={bookmark}></Bookmarked> )
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;