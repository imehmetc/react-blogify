import React, { useContext } from 'react'
import Category from '../Category/Category.jsx'
import './sidebar.scss'
import DataContext from '../../context/DataContext.jsx'

const Sidebar = () => {
  
  const {categories, setSelectedCategory} = useContext(DataContext);
  
  return (
    <div className='sidebar'>
      <h3 className='category-title'>Categories</h3>
      <ul className='category-list'>
        {categories.map(category => (
          <li key={category.id} onClick={e => setSelectedCategory(e.target.innerText)
          }>
            <Category key={category.id} category={category} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
