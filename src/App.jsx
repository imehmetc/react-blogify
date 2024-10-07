import React, { useState } from 'react'
import './assets/styles/index.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import { blogs } from './assets/data/blogs.js'
import { categories } from './assets/data/categories.js'


const App = () => {

  // Datas
  const [blogData, setBlogs] = useState(blogs);
  const [categoryData, setCategory] = useState(categories);

  // Add New Blog
  const addNewBlog = (newBlog) => {
    setBlogs(prev => [...prev, newBlog]);
  };
  
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Sidebar categories = {categoryData}></Sidebar>
        <Main blogs = {blogData} addNewBlog = {addNewBlog}></Main>
      </div>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App