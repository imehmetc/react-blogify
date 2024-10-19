import React, { useContext } from 'react'
import Card from '../Card/Card.jsx'
import './cardlist.scss'
import DataContext from '../../context/DataContext.jsx';

const CardList = () => {
  const { blogs, selectedCategory } = useContext(DataContext);
  return (
    <div>
      {
        blogs.map(blog => 
          !blog.isDeleted &&
          (selectedCategory === "All Categories" || blog.category === selectedCategory) &&
          <Card key={blog.id} blog = {blog} />
        )
      }
     
    </div>
   
  )
}

export default CardList