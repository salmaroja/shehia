import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted email:', email);
    console.log('Submitted password:', password);
    setEmail('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleGoogleSignIn = () => {
    console.log('Continue with Google');
  };

  // kuonesha map
  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.defer = true;
      script.async = true;

      window.initMap = initMap; 

      document.head.appendChild(script);
    };

    loadMap();
  }, []);

  const initMap = () => {
    
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -6.1659, lng: 39.2026 }, 
      zoom: 15, 
    });

    
    const marker = new window.google.maps.Marker({
      position: { lat: -6.1658, lng: 39.2027 }, 
      map: map,
      title: 'Zanzibar University',
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contact-page">
            <div className="content">
              <h1 className="contact-heading">Contact Us</h1>
              <p className="contact-description">
                Have questions or feedback? Reach out to us!
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-danger google-signin-btn" onClick={handleGoogleSignIn}>
                    <FontAwesomeIcon icon={faGoogle} className="icon google-icon" />
                    Continue with Google
                  </button>
                </div>
                <div className="forgot-password">
                  <a href="#forgot" onClick={handleForgotPassword}>Forgot Password?</a>
                </div>
              </form>
              <div className="mt-4">
                <h2>Find Our Location</h2>
                <div id="map" style={{ height: '400px' }}></div>
              </div>
              <div className="social-icons mt-4">
                <a href="https://twitter.com/shehia" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="icon twitter-icon" />
                </a>
                <a href="https://facebook.com/shehia" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
                </a>
                <a href="https://instagram.com/shehia" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
