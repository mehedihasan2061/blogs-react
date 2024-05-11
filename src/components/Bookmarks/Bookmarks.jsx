
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmark }) => {
    const { title } = bookmark;
    console.log(bookmark);
  return (
    <div className="p-6 bg-slate-500 m-4 rounded-xl text-white fixed ">
          <p className=" font-bold">{ title}</p>
    </div>
  );
};

Bookmarks.propTypes = {
    bookmark:PropTypes.object
};

export default Bookmarks;