import React, { useContext } from 'react'
import Category from '../Category/Category.jsx'
import './sidebar.scss'
import DataContext from '../../context/DataContext.jsx'

const Sidebar = () => {
  
  const {categoryData, dispatch } = useContext(DataContext);
  
  return (
    <div className='sidebar'>
      <h3 className='category-title'>Categories</h3>
      <ul className='category-list'>
        {categoryData.map(category => (
          <li key={category.id} onClick={e => dispatch({type:"selectedCategory", payload: e.target.innerText})
          }>
            <Category key={category.id} category={category} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
