import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import NewBlogPage from './NewBlogPage';
import BlogDetailPage from './BlogDetailPage';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ProfilePage from './ProfilePage';

const MainContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location]); // Sayfa her değiştiğinde tetiklenecek

  return (
    <div className="app">
      {isLoading && (
        <div className="loading-overlay">
          <LoadingSpinner />
        </div>
      )}

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/newblog' element={<NewBlogPage />} />
        <Route path='/blogdetail/:id' element={<BlogDetailPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
