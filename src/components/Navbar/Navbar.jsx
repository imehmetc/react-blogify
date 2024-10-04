import React, { useState } from 'react';
import './navbar.scss'
import Logo from '../../assets/img/logo2.png'
import ProfilePhoto from '../../assets/img/profile-photo.jpg'
import { FaRegBell, FaSignOutAlt  } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { PiNotePencilThin } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='navbar'>
      <div className="logo-search">
        <img src={Logo} alt="BLOGIFY" />
        <input className='searchbox' type="search" placeholder='Search' />
      </div>
      <div className="nav-items">
        {/* Kullanıcı Giriş Yapmışsa */}
        <div className='btn-write'><PiNotePencilThin size={23}/> Write</div>
        <div className='btn-notification'> <FaRegBell size={20} /></div>
        
        <img src={ProfilePhoto} className='profile-photo' alt="Profile Photo" onClick={toggleDropDown} />
        
        <div className= {`dropdown ${isDropdownOpen ? `open` : ''}`}>
          <ul>
            <li>user@user.com</li>
            <hr />
            <li><a href="#"><FaRegUser /> Profile</a></li>
            <li><a href="#"><MdFavoriteBorder /> Favorites</a></li>
            <li><a href='#'><FaSignOutAlt /> Signout</a></li>
          </ul>
        </div>

        {/* Kullanıcı Giriş Yapmamışsa */}
        {/* <button className='btn-login'>Login</button> */}
      </div>
    </nav>
  )
}

export default Navbar