import React, { useContext, useEffect, useState } from 'react';
import './navbar.scss'
import Logo from '../../assets/img/logo2.png'
import ProfilePhoto from '../../assets/img/profile-photo.jpg'
import { FaRegBell, FaSignOutAlt  } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { PiNotePencilThin } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import DataContext from '../../context/DataContext';
import AuthContext from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const { toggleDropDown, isDropdownOpen, dispatch } = useContext(DataContext);
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getCurrentUser = async() => {
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userTokens")).access_token}`
      }
    });
    const user = response.data;
    setCurrentUser(user);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userTokens"))) {
      getCurrentUser();
    }
  }, []);

  return (
    <nav className='navbar'>
      <div className="logo-search">
        <Link to='/'><img src={Logo} alt="BLOGIFY" /></Link>
        
        <input onChange={e => dispatch({type:"setSearch", payload: e.target.value})} className='searchbox' type="search" placeholder='Search' />
      </div>
      <div className="nav-items">
        {/* Kullanıcı Giriş Yapmışsa */}
        {isAuthenticated !== "null" ? (
          <>
            <div className='btn-write'>
              <Link to="/newblog"><PiNotePencilThin size={28} /></Link>
            </div>
            <div className='btn-notification'>
              <FaRegBell size={25} />
            </div>
            <img src={ currentUser.avatar || ProfilePhoto } className='profile-photo' alt="Profile" onClick={toggleDropDown} />

            <div className={`dropdown ${isDropdownOpen ? `open` : ''}`}>
              <ul>
                <li>{currentUser.email}</li>
                <hr />
                <li><Link><FaRegUser /> Profile</Link></li>
                <li><Link><MdFavoriteBorder /> Favorites</Link></li>
                <li><a onClick={handleLogout}><FaSignOutAlt /> Signout</a></li>
              </ul>
            </div>
          </>
        ) : (
          // Kullanıcı Giriş Yapmamışsa
          <button className='btn-login' onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar