import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { Flip, toast } from "react-toastify";
import { initialState, reducer } from "../reducer/reducer";


const DataContext = createContext();

export const DataProvider = ({children}) => {

  // reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDropdownOpen, blogData } = state;
  
  // Navbar Profile Dropdown
  const toggleDropDown = () => {
    // case-3
    dispatch({type: "profileDropdown", payload: !isDropdownOpen});
  };

  // Get Blogs
  const getBlogs = async () => {
    const url = "http://localhost:3000/blogs";
    const response = await fetch(url);
    const blogs = await response.json();
    // case-1
    dispatch({type:"getBlogs", payload: blogs});
    setLoading(false);
  };

  // Get Categories
  const getCategories = async () => {
    const url = "http://localhost:3000/categories";
    const response = await axios.get(url);
    const categories = await response.data;
    // case-2
    dispatch({type:"getCategories", payload: categories});
    setLoading(false);
  };




 
  // Add New Blog
  const addNewBlog = async (newBlog) => {
    // case-15
    dispatch({type:"addNewBlog", payload: newBlog});
    const url = "http://localhost:3000/blogs";
    await axios.post(url, newBlog);

    getBlogs();

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
      // case-16
      dispatch({type: "deleteBlog", payload: id});
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

    getBlogs();
    // case-17
    dispatch({type:"updateBlog", payload: updatedBlog});

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
  // Yeni blog ekleme (Forms.jsx)
  const handleSubmit = (e) => {
    e.preventDefault();

    addNewBlog({
        id: (Number(blogData[blogData.length - 1].id) + 1).toString(),
        title: state.title,
        content: state.content,
        imageUrl: state.imageUrl,
        category: state.category,
        userEmail: state.userEmail,
        likeCount: state.likeCount,
        viewCount: state.viewCount,
        userCommentCount: state.userCommentCount
      });

      // Formu resetleme
      // case-14
      dispatch({type:"resetForm"});
    };

    // Loading
    const setLoading = (load) => {
      dispatch({
        type: "SET_LOADING", payload: load
      });
    };

    // User Data
    const fetchUserData = async () => {
      try {
        const userTokens = localStorage.getItem("userTokens");
        if (!userTokens) {
          throw new Error("User tokens not found in localStorage");
        }
    
        const url = "https://api.escuelajs.co/api/v1/auth/profile";
        const bearer = `Bearer ${JSON.parse(userTokens).access_token}`;
        
        const response = await axios.get(url, {
          headers: {
            "Authorization": bearer,
          },
        });
        const userData = await response.data;
        
        dispatch({ type: "USER_DATA", payload: userData });
      } catch (error) {
        console.log("Error fetching user data:", error.response ? error.response.data : error.message);
      }
    };
    
    
    // useEffects
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        await getBlogs();
        await getCategories();
        await fetchUserData();
        setLoading(false);
      };
    
      fetchData();
    }, []);
    

    return <DataContext.Provider value={{
    
      addNewBlog, 
      deleteBlog, 
      toggleDropDown,
      updateBlog,
      handleSubmit,
      ...state,
      dispatch,
      setLoading,
      isLoading: state.isLoading,
      
      }}>
                {children}
            </DataContext.Provider>
}

export default DataContext;