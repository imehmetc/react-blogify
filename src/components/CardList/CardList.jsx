import React, { useContext, useState } from 'react'
import Card from '../Card/Card.jsx'
import './cardlist.scss'
import DataContext from '../../context/DataContext.jsx';
import Pagination from '../Pagination/Pagination.jsx';

const CardList = () => {
  const { blogData, selectedCategory } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const unDeletedDatas = blogData.filter(data => !data.isDeleted); // Silinmemiş veriler
  const currentPosts = unDeletedDatas.slice(firstPostIndex, lastPostIndex);

  
  
  if (!blogData || blogData.length === 0) {
    return <div>No blogs available.</div>;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sayfa yukarı kaydırma
  };

  return (
    <div>
      {
        currentPosts.map((blog, index) => {
          // blog undefined ise hata vermesin diye kontrol ekliyoruz
          if (!blog) return null;

          // Eğer blog silinmemişse ve kategori filtreleri sağlanıyorsa göster
          return (
            !blog.isDeleted &&
            (selectedCategory === "All Categories" || blog.category === selectedCategory) && 
            <Card key={blog.id || index} blog={blog} />
          );
        })
      }
      <Pagination
        totalPosts = { unDeletedDatas.length }
        postsPerPage = { postsPerPage }
        setCurrentPage= { handlePageChange }
        currentPage= { currentPage }
      />
    </div>
   
  )
}

export default CardList