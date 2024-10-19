import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Flip, toast } from "react-toastify";


const DataContext = createContext();

export const DataProvider = ({children}) => {

  // useStates
  const [blogData, setBlogs] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [likeCount, setLikeCount] = useState("");
  const [viewCount, setViewCount] = useState("");
  const [userCommentCount, setUserCommentCount] = useState("");
  const [category, setCategory] = useState("Select a Category");
  
  // Navbar Profile Dropdown
  const toggleDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Get Blogs
  const getBlogs = async () => {
    const url = "http://localhost:3000/blogs";
    const response = await fetch(url);
    const blogs = await response.json();
    setBlogs(blogs);
  };

  // Get Categories
  const getCategories = async () => {
    const url = "http://localhost:3000/categories";
    const response = await axios.get(url);
    const categories = await response.data;
    setCategoryData(categories);
  };

  // useEffects
  useEffect(() => {
    getBlogs();
    getCategories();
  }, []);


  // Yeni blog ekleme (Forms.jsx)
  const handleSubmit = (e) => {
    e.preventDefault();

    addNewBlog({
        id: (Number(blogData[blogData.length - 1].id) + 1).toString(),
        title: title,
        content: content,
        imageUrl: imageUrl,
        userEmail: userEmail,
        category: category,
        likeCount: likeCount,
        viewCount: viewCount,
        userCommentCount: userCommentCount
      });

      // Formu resetleme
      setTitle("");
      setContent("");
      setImageUrl("");
      setUserEmail("");
      setLikeCount("");
      setViewCount("");
      setUserCommentCount("");
      setCategory("Select a Category");
    };
  

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


    return <DataContext.Provider value={{
      setSearch, 
      isDropdownOpen,
      categories: categoryData, 
      setSelectedCategory,
      blogs: blogData,
      addNewBlog, 
      deleteBlog, 
      selectedCategory,
      toggleDropDown,
      search, 
      updateBlog,
      handleSubmit,
      title,
      setTitle,
      content,
      setContent,
      category,
      setCategory,
      imageUrl,
      setImageUrl,
      userEmail,
      setUserEmail,
      likeCount,
      setLikeCount,
      viewCount,
      setViewCount,
      userCommentCount,
      setUserCommentCount
      }}>
                {children}
            </DataContext.Provider>
}

export default DataContext;