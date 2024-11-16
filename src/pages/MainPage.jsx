import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'
import { DataProvider } from '../context/DataContext'

const MainPage = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
          <Sidebar/>
          <Main/>
      </div>
    </>
  )
}

export default MainPage