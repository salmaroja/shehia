import React, { useState } from 'react';
import './Dashboard.css';
import Menu from './Menu'; // Import the Menu component

function Dashboard() {
  // ...

  return (
    <div className="dashboard-container">
      <Menu /> {/* Include the Menu component */}
      <h1 className="dashboard-heading">Welcome to Shehia System</h1>
      {/* Rest of your dashboard content */}
    </div>
  );
}

export default Dashboard;