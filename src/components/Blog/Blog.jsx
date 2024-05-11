import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
  const {
    img,
    title,
    hashtag,
    profile_img,
    author_name,
    published_date,
    reading_time,
  } = blog;
  //   console.log(blog);
  return (
    <div className="my-6 bg-slate-200  rounded-xl ">
      <img className="w-full h-80  rounded-t-xl" src={img} alt="" />
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center ">
          <img className="w-16 h-16 rounded-full" src={profile_img} alt="" />
          <div className=" p-4">
            <h6 className="text-xl font-bold">{author_name}</h6>
            <p>{published_date}</p>
          </div>
        </div>

        <div className="flex items-center ">
          <p className=" font-semibold">{reading_time} min read</p>
          <button
            onClick={() => handleBookmark(blog)}
            className="ml-4 text-violet-800 text-2xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h3 className="text-3xl font-bold p-4">{title}</h3>
      <p className="my-4 p-4">{hashtag}</p>

      <button
        onClick={() => handleReadingTime(reading_time)}
        className="text-purple-800 underline pl-4"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmark: PropTypes.func,
  handleReadingTime:PropTypes.func
};

export default Blog;
