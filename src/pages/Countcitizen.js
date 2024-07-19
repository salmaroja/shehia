import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countcitizen = () => {
  const [citizenCount, setCitizenCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCitizenCount();
  }, []);

  const fetchCitizenCount = () => {
    setIsLoading(true);
    axios.get('http://localhost:8080/api/v1/citizen/count-citizen')
      .then(response => {
        setCitizenCount(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching citizen count:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2>Citizen Count</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Total Citizens: {citizenCount}</p>
      )}
    </div>
  );
};

export default Countcitizen;
