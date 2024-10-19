import React from 'react'
import './main.scss'
import CardList from '../CardList/CardList.jsx'
import Forms from '../Forms/Forms.jsx'

const Main = () => {
  return (
    <div className='main-container'>
      <Forms/>
      <CardList/>
    </div>
  )
}

export default Main