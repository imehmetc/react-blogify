import React, { useContext  } from 'react';
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

const Navbar = () => {
  const { toggleDropDown, isDropdownOpen, dispatch, userData  } = useContext(DataContext);
  const { logout, isAuthenticated, } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
            <img src={ userData && userData.avatar ? userData.avatar: ProfilePhoto } className='profile-photo' alt="Profile" onClick={toggleDropDown} />

            <div className={`dropdown ${isDropdownOpen ? `open` : ''}`}>
              <ul>
                <li>{ userData.email }</li>
                <li className='user-role'>{ userData.role }</li>
                <hr />
                <li><Link to="/profile"><FaRegUser /> Profile</Link></li>
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