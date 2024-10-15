import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
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

      <h1><FontAwesomeIcon icon={faUser} /> Contact Info</h1>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email:  
            <a href="mailto:mrkafeelahmed.swati@gmail.com"> mrkafeelahmed.swati@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} /> Facebook: 
            <a href="https://www.facebook.com/kafeelahmedswati" target="_blank" rel="noopener noreferrer"> facebook.com/kafeelahmedswati</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faTwitter} /> Twitter: 
            <a href="https://twitter.com/mrahmed_1" target="_blank" rel="noopener noreferrer"> twitter.com/mrahmed_1</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} /> GitHub: 
            <a href="https://github.com/kafeelahmed-1" target="_blank" rel="noopener noreferrer"> github.com/kafeelahmed-1</a>
          </p>
        </div>
        <div className="contact-image">
          <img src="contact.png" alt="Contact" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
