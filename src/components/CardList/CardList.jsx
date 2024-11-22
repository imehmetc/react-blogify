import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card.jsx'
import './cardlist.scss'
import DataContext from '../../context/DataContext.jsx';
import Pagination from '../Pagination/Pagination.jsx';

const CardList = ({ userEmail }) => {
  const { blogData, selectedCategory } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    if (userEmail) {
      setPostsPerPage(3); // Eğer userEmail varsa, değeri 3 olarak ayarla
    } else {
      setPostsPerPage(6);
    }
  }, [userEmail]);

  const lastPostIndex = currentPage * postsPerPage; // son postun index'i
  const firstPostIndex = lastPostIndex - postsPerPage; // ilk postun index'i

  const unDeletedDatas = blogData.filter(data => !data.isDeleted); // Silinmemiş veriler
  const userPosts = userEmail ? unDeletedDatas.filter(data => data.userEmail === userEmail) : unDeletedDatas; // Profile sayfasında kullanıcı'nın attığı postlar
  const currentPosts = userPosts.slice(firstPostIndex, lastPostIndex); 

  console.log(userEmail);
  
  
  if (!blogData || blogData.length === 0) {
    return <div>No blogs available.</div>;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sayfa yukarı kaydırma
  };

  return (
    <div>
      {currentPosts.length === 0 ? ( 
        <div>No posts found for the selected category.</div> 
        ) :
        ( currentPosts.map((blog, index) => {
          // blog undefined ise hata vermesin diye
          if (!blog) return null;

          // Eğer blog silinmemişse ve kategori filtreleri sağlanıyorsa göster
          return (
            !blog.isDeleted &&
            (selectedCategory === "All Categories" || blog.category === selectedCategory) && 
            <Card key={blog.id || index} blog={blog} />
          );
        }))
      }
      <Pagination
        totalPosts = { userEmail ? userPosts.length : unDeletedDatas.length }
        postsPerPage = { postsPerPage }
        setCurrentPage = { handlePageChange }
        currentPage = { currentPage }
      />
    </div>
   
  )
}

export default CardList