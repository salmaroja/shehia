// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SideNavbar from './component/SideNavbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import About from './pages/About';
import Reports from './pages/Reports';
import Event from './pages/Events';
import Citizenlist from './pages/Citizenlist';
import Citizenform from './pages/Citizenform';
import EventForm from './pages/EventForm';
import CitizenManagement from './pages/CitizenManagement';
import EventList from './pages/Eventlist';
import MainLayout from './Layout/MainLayout';
import UpdateEventForm from './pages/UpdateEventForm';
import Citizen from './pages/Citizen';

const AppContent = () => {
  const location = useLocation();
  const hideSideNavbar = ['/'].includes(location.pathname); // Add other routes if needed

  return (
    <div className="d-flex">
      {!hideSideNavbar && <SideNavbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/event" element={<Event />} />
          <Route path="/eventform" element={<EventForm />} />
          <Route path="/citizenform" element={<Citizenform />} />
          <Route path="/citizenlist" element={<Citizenlist />} />
          <Route path="/citizenmagement" element={<CitizenManagement />} />
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/citizen" element={<Citizen />} />
          <Route path="/update-event/:id" element={<UpdateEventForm />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
