import React from 'react'
import './main.scss'
import CardList from '../CardList/CardList.jsx'
import Forms from '../Forms/Forms.jsx'

const Main = ({blogs, addNewBlog}) => {
  return (
    <div className='main-container'>
      <Forms blogs = {blogs} addNewBlog = {addNewBlog}></Forms>
      <CardList blogs = {blogs}></CardList>
    </div>
  )
}

export default Main