import React from 'react'
import './category.scss'

const Category = ({category}) => {
  return (
    <div className='category'>
      {
        category.categoryName
      }
    </div>
  )
}

export default Category