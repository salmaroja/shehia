// component/SideNavbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideNavbar.css'; // Import the CSS file for styling

const SideNavbar = () => {
  return (
    <div className="side-navbar bg-light">
      <nav className="nav flex-column">
      <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        <NavLink className="nav-link" to="/home">Home</NavLink>
        
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        <NavLink className="nav-link" to="/services">Services</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/reports">Reports</NavLink>
        <NavLink className="nav-link" to="/event">Event</NavLink>
        <NavLink className="nav-link" to="/citizenlist">Citizen List</NavLink>
        
        
      </nav>
    </div>
  );
};

export default SideNavbar;
