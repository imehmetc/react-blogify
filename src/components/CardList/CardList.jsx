import React, { useContext } from 'react'
import Card from '../Card/Card.jsx'
import './cardlist.scss'
import DataContext from '../../context/DataContext.jsx';

const CardList = () => {
  const { blogData, selectedCategory } = useContext(DataContext);

  if (!blogData || blogData.length === 0) {
    return <div>No blogs available.</div>;
  };

  return (
    <div>
      {
        blogData.map((blog, index) => {
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
    </div>
   
  )
}

export default CardList