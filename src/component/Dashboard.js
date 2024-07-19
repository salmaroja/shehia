import React, { useState } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faCog, faPhone, faMap, faEdit, faUsers, faChartBar, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [showLocations, setShowLocations] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showFinance, setShowFinance] = useState(false);

  const handleImportantLocations = () => {
    setShowLocations(true);
    
  };

  const handleEvents = () => {
    setShowEvents(!showEvents);
    
  };

  const handleReports = () => {
    setShowReports(!showReports);
    
  };

  const handleServices = () => {
    setShowServices(!showServices);
    
  };

  const handleFinance = () => {
    setShowFinance(!showFinance);
    
  };

  return (
    <div className="container-fluid">
      <h1 className="dashboard-heading">Welcome to the Shehia System</h1>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <FontAwesomeIcon icon={faHome} className="icon" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <FontAwesomeIcon icon={faInfo} className="icon" />
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                <FontAwesomeIcon icon={faCog} className="icon" />
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page/event">
                <FontAwesomeIcon icon={faEdit} className="icon" />
                Event
              </a>
            </li>
          </ul>
        </div>
      </nav> */}

      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2 className="section-heading">Map and Important Locations</h2>
              <p className="section-description">Include important locations in the Shehia such as Stone Town, Magomeni, and Kiembesamaki.</p>
              <button className="btn btn-primary" onClick={handleImportantLocations}>
                <FontAwesomeIcon icon={faMap} className="icon" />
                Show Important Locations
              </button>
              {showLocations && (
                <ul className="mt-3">
                  <li>Mambo msije(ZCSRA)</li>
                  <li>Lumumba</li>
                  <li>Migration</li>
                  <li>Mw</li>
                  
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2 className="section-heading">Events and Event Management</h2>
              <p className="section-description">Create a system to manage important events in the Shehia.</p>
              <button className="btn btn-primary" onClick={handleEvents}>
                <FontAwesomeIcon icon={faUsers} className="icon" />
                Show Events
              </button>
              {showEvents && (
                <ul className="mt-3">
                  <li>Community Meetings</li>
                  <li>Festivals</li>
                  <li>Development Activities</li>
                  {/* Add more events as needed */}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2 className="section-heading">Reports and Community Statistics</h2>
              <p className="section-description">Include important community reports and statistics such as population numbers and growth trends.</p>
              <button className="btn btn-primary" onClick={handleReports}>
                <FontAwesomeIcon icon={faChartBar} className="icon" />
                Show Reports
              </button>
              {showReports && (
                <ul className="mt-3">
                  <li>Population Numbers</li>
                  <li>Growth Trends</li>
                  {/* Add more social statistics as needed */}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2 className="section-heading">Shehia Services Management</h2>
              <p className="section-description">Enhance the management of essential services such as health, education, and infrastructure.</p>
              <button className="btn btn-primary" onClick={handleServices}>
                <FontAwesomeIcon icon={faCog} className="icon" />
                Show Services
              </button>
              {showServices && (
                <ul className="mt-3">
                  <li>Health</li>
                  <li>Education</li>
                  <li>Infrastructure</li>
                  {/* Add more community services as needed */}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2 className="section-heading">Financial Management</h2>
              <p className="section-description">Implement financial management such as budgeting and revenue collection.</p>
              <button className="btn btn-primary" onClick={handleFinance}>
                <FontAwesomeIcon icon={faMoneyBill} className="icon" />
                Show Financial Management
              </button>
              {showFinance && (
                <ul className="mt-3">
                  <li>Budgeting</li>
                  <li>Revenue Collection</li>
                
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
