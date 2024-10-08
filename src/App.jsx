import React, { useEffect, useState } from 'react'
import './assets/styles/index.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import { blogs } from './assets/data/blogs.js'
import { categories } from './assets/data/categories.js'
import axios from 'axios'


const App = () => {

  // Datas without Api
  // const [blogData, setBlogs] = useState(blogs);
  // const [categoryData, setCategory] = useState(categories);

  // Datas with Api
  const [blogData, setBlogs] = useState([]);
  const [categoryData, setCategory] = useState([]);

  const getBlogs = async () => {
    const url = "http://localhost:3000/blogs";
    const response = await fetch(url);
    const blogs = await response.json();
    setBlogs(blogs);
  };

  const getCategories = async () => {
    const url = "http://localhost:3000/categories";
    const response = await axios.get(url);
    const categories = await response.data;
    setCategory(categories);
  };

  // useEffect()
  useEffect(() => {
    getBlogs();
    getCategories();
  }, []);

  // Category Filter
  const[selectedCategory, setSelectedCategory] = useState("All Categories");

  // Search Filter
  const[search, setSearch] = useState("");

  // Add New Blog
  const addNewBlog = async (newBlog) => {
    setBlogs(prev => [...prev, newBlog]);
    const url = "http://localhost:3000/blogs";
    await axios.post(url, newBlog);
  };

  // Delete Blog
  const deleteBlog = async (id) => {
    setBlogs(prev => prev.filter(blog => blog.id !== id));
    const url = `http://localhost:3000/blogs/${id}`;
    await axios.patch(url, { isDeleted:true });
  };
  
  

  return (
    <>
      <Navbar setSearch = {setSearch}></Navbar>
      
      <div className="container">
        <Sidebar 
          categories = {categoryData} 
          setSelectedCategory = {setSelectedCategory}>
        </Sidebar>
        
        <Main 
          blogs = {blogData} 
          addNewBlog = {addNewBlog} 
          categories = {categoryData}
          deleteBlog = {deleteBlog}
          selectedCategory = {selectedCategory}
          search = {search}
        ></Main>
      
      </div>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App