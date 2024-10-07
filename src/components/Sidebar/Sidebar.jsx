import React from 'react'
import Category from '../Category/Category.jsx'
import './sidebar.scss'

const Sidebar = ({ categories }) => {
  return (
    <div className='sidebar'>
      <h3 className='category-title'>Categories</h3>
      <ul className='category-list'>
        {categories.map(category => (
          <li key={category.id}>
            <Category category={category} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
