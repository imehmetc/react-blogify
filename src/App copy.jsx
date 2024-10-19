import React, { useEffect, useState } from 'react'
import './assets/styles/index.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import { blogs } from './assets/data/blogs.js'
import { categories } from './assets/data/categories.js'
import axios from 'axios'
import { Flip, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


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

    toast.success('Blog Successfully Added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
      });
  };

  // Delete Blog
  const deleteBlog = async (id) => {
    const confirmation = confirm("Do you want to delete this blog?");
    if (confirmation) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
      const url = `http://localhost:3000/blogs/${id}`;
      await axios.patch(url, { isDeleted:true });

      toast.success('Blog Successfully Deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
    }
    else{
      toast.info('Blog deletion cancelled.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
    }
    
  };
  
  // Update Blog
  const updateBlog = async(id, updatedBlog) => {
    const url = `http://localhost:3000/blogs/${id}`;
    await axios.patch(url, updatedBlog);
    setBlogs(prev => prev.map(blog => {
      if(blog.id === updatedBlog.id){
      return {...updatedBlog};
      }
      else{
      return {...blog};
      }
    }));

    toast.success('Blog Successfully Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
      });
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
          categories = {categoryData}
          selectedCategory = {selectedCategory}
          search = {search}
          addNewBlog = {addNewBlog} 
          deleteBlog = {deleteBlog}
          updateBlog = {updateBlog}
        ></Main>
      
      </div>
      {/* <Footer></Footer> */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Flip
      />
    </>
  )
}

export default App