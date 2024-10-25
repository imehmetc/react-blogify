import React, { useContext, useEffect, useState } from 'react'
import { FaRegComment, FaRegEye, FaThumbsUp } from 'react-icons/fa'
import { DataProvider } from '../context/DataContext'
import Navbar from '../components/Navbar/Navbar'
import '../assets/styles/blogdetailpage.scss'
import ProfilePhoto from '../assets/img/profile-photo.jpg'
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import { useParams } from 'react-router-dom'

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");
  
  const fetchBlog = async () => {
    const url = `http://localhost:3000/blogs/${id}`;
    const response = await axios.get(url);
    setBlog(response.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  
  return (
    <DataProvider>
      <Navbar/>
      <div className='blog-detail'>
        <div className='blog-header'>
          <h1> {blog.title} </h1>
          <div className='blog-user-infos'>
            <img src={ProfilePhoto} className='profile-photo' alt="profilePhoto" />
            <div className='user-infos'>
              <p className='mail'>{blog.userEmail}</p>
              <p className='date'>Oct 25, 2024</p>
            </div>
          </div>
          <hr />
          <div className='blog-stats'>
            <span><FaThumbsUp /> {blog.likeCount}</span>
            <span><FaRegEye /> {blog.viewCount}</span>
            <span><FaRegComment /> {blog.userCommentCount}</span>
          </div>
          <hr />
        </div>
        <div className='blog-content'>
          <img src={blog.imageUrl} alt="blogPhoto" className='blog-image'/>
          <p> {blog.content} </p>
        </div>
      </div>
    </DataProvider>
  )
}

export default BlogDetailPage