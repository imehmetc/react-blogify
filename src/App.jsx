import React from 'react'
import './assets/styles/index.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import CardList from './components/CardList/CardList.jsx'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Main></Main>
      <CardList></CardList>
      <Footer></Footer>
    </>
  )
}

export default App