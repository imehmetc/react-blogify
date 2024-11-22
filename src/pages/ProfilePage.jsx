import React from 'react'
import { DataProvider } from '../context/DataContext'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Profile from '../components/Profile/Profile'

const ProfilePage = () => {
  return (
    <DataProvider>
        <Navbar/>
        <Profile/>
    </DataProvider>
  )
}

export default ProfilePage