import React from 'react'
import './assets/styles/index.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from './context/DataContext.jsx'
import { BrowserRouter } from 'react-router-dom'


const App = () => {

  return (
    <BrowserRouter>
     <DataProvider>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Main />
      </div>
      {/* <Footer></Footer> */}
      <ToastContainer/>
      </DataProvider>
    </BrowserRouter>
   
  )
}

export default App