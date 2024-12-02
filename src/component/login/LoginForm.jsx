import React from 'react'
import './LoginForm.css' ;
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1> LOGIN </h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forget">
                <label><input type='checkbox' /> Remember me </label>
                <a href= "#">Forget password? </a>
            </div>
            
            <button type="submit">Login</button>

            <div className="register-link">
                <p> Dont have an acount? <a href="#"> Register </a></p>
            </div>
        </form>

    </div>
  )
}

export default LoginForm
