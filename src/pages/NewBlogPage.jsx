import React from 'react'
import Forms from '../components/Forms/Forms'
import { DataProvider } from '../context/DataContext'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const NewBlogPage = () => {
  return (
    <DataProvider>
      <Navbar/>
      <div className='container'>
        <Sidebar/>
        <Forms/>
      </div>
    </DataProvider>
  )
}

export default NewBlogPage