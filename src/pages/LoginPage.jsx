import React, { useContext, useState } from 'react'
import '../assets/styles/login.scss'
import Logo from '../assets/img/logo2.png'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { Bounce, toast } from 'react-toastify'

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handeLogin = async(e) => {
        e.preventDefault();

        try {
            await login(username, password);
            navigate("/");
        } catch (error) {
            toast.error('Login Failed!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setUsername("");
            setPassword("");
        }
    }

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login-header'>
                {/* <img src={Logo} alt="logo" /> */}
                <h3>Login</h3>
            </div>
            <div className='login-body'>
                <form onSubmit={handeLogin} className='login-form'>
                    <input type="text" className='email' placeholder='Email' defaultValue={username} onChange={e => setUsername(e.target.value)}/>
                    <input type="password" className='password' placeholder='Password' defaultValue={password} onChange={e => setPassword(e.target.value)}/>
                    <input type="submit" className='loginButton' value="Login"/>
                    <Link to="/">Continue without login!</Link>
                </form>
            </div>
           
        </div>
    </div>
  )
}

export default LoginPage