import React from 'react'
import './main.scss'
import CardList from '../CardList/CardList.jsx'
import Forms from '../Forms/Forms.jsx'

const Main = ({blogs, addNewBlog, categories, deleteBlog, selectedCategory, search}) => {
  return (
    <div className='main-container'>
      <Forms 
        blogs = {blogs} 
        addNewBlog = {addNewBlog} 
        categories = {categories}
      ></Forms>

      <CardList
        blogs = {blogs}
        deleteBlog = {deleteBlog}
        selectedCategory = {selectedCategory}
        search = {search}
        categories = {categories}>
      </CardList>
    </div>
  )
}

export default Main