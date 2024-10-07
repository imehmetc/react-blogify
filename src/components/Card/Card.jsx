import React from 'react';
import './card.scss';
import { FaThumbsUp, FaRegEye, FaRegComment, FaRegUserCircle } from "react-icons/fa";

const Card = ({ blog }) => {
  return (
    <div className='blog-card'>
      <img src={blog.imageUrl} alt="photo" />
      <div className='card-content'>
        <h3>{blog.title}</h3>
        <p>{blog.content.substring(0, blog.content.substring(0, 250).lastIndexOf(" "))+ "..."}</p>
        <p><FaRegUserCircle /><strong> {blog.userEmail}</strong> </p>
        <div className="card-stats">
          <span><FaThumbsUp /> {blog.likeCount}</span>
          <span><FaRegEye /> {blog.viewCount}</span>
          <span><FaRegComment /> {blog.userCommentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
