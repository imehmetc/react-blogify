import React from 'react'
import Card from '../Card/Card.jsx'
import './cardlist.scss'

const CardList = ({blogs}) => {
  return (
    <div>
      {
        blogs.map(blog => 
          <Card key={blog.id} blog = {blog}></Card>
        )
      }
     
    </div>
   
  )
}

export default CardList