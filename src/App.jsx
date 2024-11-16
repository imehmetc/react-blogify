import React from 'react';
import './assets/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext.jsx';
import { DataProvider } from './context/DataContext.jsx';
import MainContent from './pages/MainContent.jsx';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          {/* Router içerisindeki her şeyi ayrı bir bileşene taşıyoruz */}
          <MainContent/>
        </BrowserRouter>
        <ToastContainer />
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
