import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">UpWard!</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/profile">UserProfile</a></li>
           <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="home-container">
        <div className="content-container">
          <h2>Welcome to our application!</h2>
          <a className="login-link" href="/login">Login</a>
        </div>
        <div className="image-container">
          <img 
            src="newwelcome.png.png" 
            alt="Application"
            className="banner-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
