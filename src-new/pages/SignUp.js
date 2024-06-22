import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../assets/person.png';
import EmailIcon from '../assets/email.png';
import PasswordIcon from '../assets/password.png';
import '../styles/SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!validateEmail(email)) {
        setError('Invalid email format');
        setLoading(false);
        return;
      }
      const result = await axios.post('http://localhost:3001/register', { name, email, password });
      if (result.data.status === 'success') {
        setSuccess('Account created successfully');
        navigate('/login');
      } else {
        setError(result.data.message);
      }
    } catch (error) {
      setError('Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='SignUp'>
      {error && <div className='error'>{error}</div>}
      {success && <div className='success'>{success}</div>}
      <form onSubmit={handleSignUp}>
      <h1 className='signup-heading'>User SignUp</h1>
        <div className='input'>
          <img src={UserIcon} alt='User Icon' />
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input'>
          <img src={EmailIcon} alt='Email Icon' />
          <input
            type='email'
            placeholder='Your Email ID'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <img src={PasswordIcon} alt='Password Icon' />
          <input
            type='password'
            placeholder='Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='submit-container'>
          <button type='submit' className='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;