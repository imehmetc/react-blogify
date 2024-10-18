import React, { useEffect, useState } from 'react';
import './card.scss';
import { FaThumbsUp, FaRegEye, FaRegComment, FaRegUserCircle, } from "react-icons/fa";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";

const Card = ({ blog, deleteBlog, search, categories, updateBlog }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  // Blog Update
  const[title, setTitle] = useState("");
  const[content, setContent] = useState("");
  const[image, setImage] = useState("");
  const[category, setCategory] = useState("");
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedBlog = {
      id: blog.id,
      title: title,
      content: content,
      imageUrl: image,
      category: category
    };
    
    updateBlog(blog.id, updatedBlog);

    togglePopup();
  };

  useEffect(() => {
    if (isPopupOpen) {
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.imageUrl);
      setCategory(blog.category);
    }
  }, [isPopupOpen])
  return (
    <>
      {blog.title.toLowerCase().startsWith(search.toLowerCase()) && (
        <div className='blog-card'>
          <img src={blog.imageUrl} alt="photo" />
          
          <div className='card-content'>
            <h3>{blog.title}</h3>
            <p>{(blog.content.length > 200 ? blog.content.substring(0,blog.content.substring(0,200).lastIndexOf(" ")) : blog.content) + "..."}</p>
            <p><FaRegUserCircle /><strong> {blog.userEmail}</strong> </p>
            
            <div className="card-footer">
              
              <div className='card-stats'>
                <span><FaThumbsUp /> {blog.likeCount}</span>
                <span><FaRegEye /> {blog.viewCount}</span>
                <span><FaRegComment /> {blog.userCommentCount}</span>
              </div>
             
              <div className='card-category'>
                <span> {blog.category} </span>
              </div>
              
              <div className='card-buttons'>
                <button onClick={() => deleteBlog(blog.id)}><FaRegTrashCan /></button>
                <button onClick={togglePopup}><FaRegPenToSquare /></button>
              </div>
            
            </div>
          </div>
        </div>
      )}

      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <h2>Edit Blog</h2>
            <form onSubmit={handleSubmit}>
              <label>Title:</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
              
              <label>Content:</label>
              <textarea rows={6} value={content} onChange={e => setContent(e.target.value)} />

              <label>Image Url:</label>
              <input type="text" value={image} onChange={e => setImage(e.target.value)} />

              <label>Category:</label>
              <select value={category} onChange={e => setCategory(e.target.value)}>
                {
                  categories.map(category => 
                    category.categoryName !== "All Categories" &&
                    <option 
                    key={category.id}
                    value={category.categoryName}
                    >
                      {category.categoryName}
                    </option>
                  )
                }
              </select>

              <button type="submit">Save</button>
              <button type="button" onClick={togglePopup}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
