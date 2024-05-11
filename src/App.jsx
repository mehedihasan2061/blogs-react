import Header from "./components/Header/Header"
import './App.css'
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {

  const [bookmark, setBookmark] = useState([])
  const [readingTime,setReadingTime]=useState(0)
  
  const handleBookmark = (singleBookmark) => {
    // console.log(bookmark);
    const existBookmark = bookmark.find((bm) => bm.id == singleBookmark.id);
    if (!existBookmark) {
      setBookmark([...bookmark, singleBookmark]);
    }
    else {
      alert('already added')
    }
  }

  const handleReadingTime = (time) => {
   setReadingTime(readingTime + time)
  }
 
 
  return (
    <>
      <div className="max-w-4xl mx-auto mb-20">
        <Header></Header>
      </div>
      <div className="flex  max-w-4xl mx-auto gap-10">
        <Blogs
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <div className="bg-gray-200">
          <h2 className="text-2xl font-semibold border-solid border-b-4 p-2">
            Spent Time on read : {readingTime} min
          </h2>

          <h1 className="text-2xl font-bold p-6 text-center border-solid border-b-4">
            BookMarked Blogs : {bookmark.length}
          </h1>
          {bookmark.map((bm, index) => (
            <Bookmarks key={index} bookmark={bm}></Bookmarks>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
