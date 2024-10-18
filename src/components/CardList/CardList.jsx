import React from 'react'
import Card from '../Card/Card.jsx'
import './cardlist.scss'

const CardList = ({blogs, deleteBlog, selectedCategory, search, categories, updateBlog}) => {
  return (
    <div>
      {
        blogs.map(blog => 
          !blog.isDeleted &&
          (selectedCategory === "All Categories" || blog.category === selectedCategory) &&
          <Card 
            key={blog.id} 
            blog = {blog}
            deleteBlog={ deleteBlog }
            search = {search}
            categories = {categories}
            updateBlog = {updateBlog}
          ></Card>
        )
      }
     
    </div>
   
  )
}

export default CardList