import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import EmailIcon from '../assets/email.png';
import PasswordIcon from '../assets/password.png';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateEmail(email)) {
      setError('Invalid email format');
      setLoading(false);
      return;
    }
    try {
      const result = await axios.post('http://localhost:3001/login', { email, password });
      if (result.data.status === 'success') {
        navigate('/');
      } else {
        setError(result.data.message);
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='Login'>
      {error && <div className='error'>{error}</div>}
      <form onSubmit={handleSubmit}>
        <h1 className='login-heading'>User Login</h1>
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
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>
      </form>
      <div className='toggle-action'>
        <p>
          Don't have an account?
          <Link to="/register">Sign Up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;