import React, { useState } from 'react'
import UserIcon from '../assets/person.png'
import EmailIcon from '../assets/email.png'
import PasswordIcon from '../assets/password.png'
import "../styles/LoginSignUp.css"

function LoginSignUp() {
  const [action, setAction] = useState('Sign Up');


  return (
    <div className='LoginSignUp'>
    <div className="container">
        <div className="header">
            <div className='text'> {action} </div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:
            <div className='input'>
                <img src={UserIcon} alt="UserIcon" />
                <input type="text" placeholder='Your Name' />
            </div>}
            <div className='input'>
                <img src={EmailIcon} alt="EmailIcon" />
                <input type="email" placeholder='Your Email ID' />
            </div>
            <div className='input'>
                <img src={PasswordIcon} alt="PasswordIcon" />
                <input type="password" placeholder='Your Password' />
            </div>
        </div>
        <div className='submit-container'>
            <button 
                className={action==="Sign Up"?"submit gray":"submit"}
                onClick={() => {setAction("Login")}}
            > 
                Login 
            </button>
            <button 
                className={action==="Login"?"submit gray":"submit"}
                onClick={() => {setAction("Sign Up")}}
            > 
            Sign Up 
            </button>
        </div>
    </div>
    </div>
  )
}

export default LoginSignUp