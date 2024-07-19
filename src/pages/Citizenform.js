import React, { useState } from 'react';

import axios from 'axios';

const Citizenform = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/citizen/post-citizen', {
        name,
        address,
        email,
        dateOfBirth: parseInt(dateOfBirth) 
      });
      console.log('New citizen added:', response.data);
      
      setName('');
      setAddress('');
      setEmail('');
      setDateOfBirth('');
    } catch (error) {
      console.error('Error adding citizen:', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Date of Birth (YYYY)"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
      />
      <button type="submit">Add Citizen</button>
    </form>
  );
};

export default Citizenform;
