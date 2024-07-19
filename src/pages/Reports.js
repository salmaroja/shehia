import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Report.css';

const Reports = () => {
  const [population, setPopulation] = useState(0);
  const [womenCount, setWomenCount] = useState(0);
  const [menCount, setMenCount] = useState(0);
  const [serviceUsers, setServiceUsers] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [citizenCount, setCitizenCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    setIsLoading(true);
    axios.get('http://your-backend-url/api/reports')
      .then(response => {
        const data = response.data;
        setPopulation(data.population);
        setWomenCount(data.womenCount);
        setMenCount(data.menCount);
        setServiceUsers(data.serviceUsers);
        setEventsCount(data.eventsCount);
        setCitizenCount(data.citizenCount);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="report-container">
      <div className="header">
        <img src={`${process.env.PUBLIC_URL}/assets/zanzibar_logo.png`} alt="Serikali ya Zanzibar" />
        <h1>Reports and Statistics</h1>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="report-section">
            <h2>Zanzibar Population</h2>
            <p>Total Population: {population}</p>
            <p>Women: {womenCount}</p>
            <p>Men: {menCount}</p>
          </div>
          <div className="report-section">
            <h2>Service Users</h2>
            <p>Total Service Users: {serviceUsers}</p>
          </div>
          <div className="report-section">
            <h2>Events Statistics</h2>
            <p>Total Events: {eventsCount}</p>
          </div>
          <div className="report-section">
            <h2>Citizen Statistics</h2>
            <p>Total Citizens: {citizenCount}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Reports;
