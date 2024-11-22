import React, { useContext } from 'react'
import './profile.scss'
import CardList from '../CardList/CardList'
import DataContext from '../../context/DataContext';
import { FaTwitterSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  const { userData } = useContext(DataContext);

  return (
    <div className='profile-container'>
      <div className='user-information'>
        <h3>{ userData ? `${userData.email} (${userData.role})` : 'Loading...' }</h3>
        <img  src={userData.avatar} alt="Profile Photo" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis magni error iste nobis vitae temporibus, blanditiis illo molestias explicabo, facilis ipsum accusantium debitis impedit necessitatibus laudantium in dolores omnis rem.</p>
        <button className='button-27'>Edit My Informations</button>
        <ul className='social-medias'>
          <li><FaTwitterSquare /></li>
          <li><FaInstagram /></li>
          <li><FaLinkedin /></li>
        </ul>
      </div>
      <div className='user-blogs'>
        { userData && <CardList userEmail={userData.email} /> }

      </div>
    </div>
  )
}

export default Profile