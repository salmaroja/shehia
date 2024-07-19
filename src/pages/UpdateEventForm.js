import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UpdateEventForm = ({ eventId, onClose }) => {
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    fetchEventDetails();
  }, []);

  const fetchEventDetails = () => {
    axios.get(`http://localhost:8080/api/v1/events/${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('Error fetching event details: ', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvent({
      ...event,
      [name]: value
    });
  };

  const updateEvent = () => {
    axios.put(`http://localhost:8080/api/v1/events/${eventId}`, event)
      .then(response => {
        console.log('Event updated: ', response.data);
        onClose(); // Close the modal or navigate away after update
      })
      .catch(error => {
        console.error('Error updating event: ', error);
      });
  };

  return (
    <div>
      <h2>Update Event</h2>
      <form onSubmit={(event) => { event.preventDefault(); updateEvent(); }}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={event.title} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={event.description} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={event.date} onChange={handleInputChange} required />
        </div>
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default UpdateEventForm;
