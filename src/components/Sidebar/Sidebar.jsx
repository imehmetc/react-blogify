import React from 'react'
import Category from '../Category/Category.jsx'
import './sidebar.scss'

const Sidebar = ({ categories, setSelectedCategory }) => {
  return (
    <div className='sidebar'>
      <h3 className='category-title'>Categories</h3>
      <ul className='category-list'>
        {categories.map(category => (
          <li key={category.id} onClick={e => setSelectedCategory(e.target.innerText)
          }>
            <Category category={category} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
