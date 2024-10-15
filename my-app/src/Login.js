import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters long
    return password.length >= 8;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // If valid, navigate to profile
    if (isValid) {
      navigate('/profile', { replace: true });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">UpWard!</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">UserProfile</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="login-container">
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            {emailError && <p className="error-message">{emailError}</p>}

            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {passwordError && <p className="error-message">{passwordError}</p>}

            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
        <div className="image-container">
          <img 
            src="newlogin.png.png" 
            alt="Login"
            className="login-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
