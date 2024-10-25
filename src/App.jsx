import React from 'react'
import './assets/styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext.jsx';
import NewBlogPage from './pages/NewBlogPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';


const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/newblog' element={<NewBlogPage/>}></Route>
          <Route path='/blogdetail' element={<BlogDetailPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </AuthProvider>
  )
}

export default App