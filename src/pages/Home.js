import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom styles
import CitizenList from './Citizenlist'; // Assuming CitizenList component is imported

const Home = () => {
  const [showCitizenList, setShowCitizenList] = useState(false);

  const handleIdentificationRequest = (selectedOption) => {
    console.log(`Handling identification request for: ${selectedOption}`);
    // Replace with your actual logic here
  };

  const handlePopulationTrends = (selectedLocation) => {
    console.log(`Handling population trends for: ${selectedLocation}`);
    // Replace with your actual logic here
  };

  const toggleCitizenList = () => {
    setShowCitizenList(!showCitizenList);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="home-heading text-center mb-4">Welcome to Shehia System</h1>
          <p className="home-description text-center mb-4">
            Manage Shehia information efficiently and securely.
          </p>
          <div className="other-features">
            <h2 className="mb-3">Explore More</h2>
            <ul className="list-unstyled">
              <li><Link to="/event" className="text-decoration-none link-primary">Events</Link></li>
              <li><Link to="/citizenmagement" className="text-decoration-none link-primary">Citizen Management</Link></li>
              <li><Link to="/view-information" className="text-decoration-none link-primary">View Information</Link></li>
              <li><Link to="/reports" className="text-decoration-none link-primary">Generate Reports</Link></li>
            </ul>
          </div>
        </div>  
      </div>
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="section-heading mb-3">Population Trends</h2>
              <p className="section-description mb-4">Explore population trends in Shehia.</p>
              <select className="form-select mb-4" onChange={(e) => handlePopulationTrends(e.target.value)}>
                <option value="">Select a location</option>
                <option value="stone-town">Stone Town</option>
                <option value="kiwengwa">Kiwengwa</option>
                <option value="nungwi">Nungwi</option>
              </select>
              <button className="btn btn-primary">View Trends</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="section-heading mb-3">Latest News</h2>
              <p className="section-description mb-4">Stay updated with the latest happenings.</p>
              <ul className="list-unstyled">
                <li>Community meetings and updates.</li>
                <li>Changes in local services.</li>
                <li>Upcoming cultural events.</li>
              </ul>
              <Link to="#" className="btn btn-outline-primary mt-3">Read More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle button for Citizen List */}
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="section-heading mb-4">Citizen List</h2>
              <button className="btn btn-primary" onClick={toggleCitizenList}>
                {showCitizenList ? 'Hide Citizen List' : 'Show Citizen List'}
              </button>
              {showCitizenList && <CitizenList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
