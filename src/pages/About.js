import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    height: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    margin: '20px 0',
    color: '#007BFF',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Shehia System</h1>
      <div style={styles.content}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/she2.jpg`}
          alt="About Shehia System"
          style={styles.image}
        />
        <p style={styles.text}>
          Welcome to the Shehia System, a platform dedicated to providing essential services
          for managing and recording citizen information. Our goal is to make the process of
          registering and managing various types of IDs as seamless and efficient as possible.
          Whether you need to register a CCM ID, a Zanzibar ID, or a TZ ID, our system is
          designed to guide you through each step with ease.
        </p>
        <p style={styles.text}>
          We are committed to maintaining the highest standards of data security and privacy.
          Your information is protected with state-of-the-art encryption and secure protocols.
          Join us in making the management of citizen information straightforward and reliable.
        </p>
      </div>
    </div>
  );
}

export default About;