import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [event, setEvent] = useState({
    name: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/event/post-event', event)
      .then(response => {
        console.log('Event created successfully:', response.data);
        // Clear form fields after successful submission
        setEvent({
          name: '',
          // Reset other fields as needed
        });
        alert('Event created successfully!');
      })
      .catch(error => {
        console.error('Error creating event:', error);
        alert('Failed to create event');
      });
  };

  return (
    <div className="container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={event.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for other event details */}
        <button type="submit" className="btn btn-primary">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
