import PropTypes from 'prop-types';

const Bookmarked = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div className='bg-slate-200 p-4 m-2 rounded-xl'>
            <h3 className='text-3xl'>{ title}</h3>
        </div>
    );
};

Bookmarked.propTypes = {
    bookmark:PropTypes.object
}

export default Bookmarked;