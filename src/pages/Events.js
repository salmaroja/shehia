import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css'; 

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({ id: null, name: '' });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    setIsLoading(true);
    axios.get('http://localhost:8080/api/v1/event/get-event')
      .then(response => {
        setEvents(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching event data:', error);
        setIsLoading(false);
      });
  };

  const handleAddEvent = () => {
    setCurrentEvent({ id: null, name: '' });
    setIsUpdate(false);
    setIsModalOpen(true);
  };

  const handleUpdateEvent = (event) => {
    setCurrentEvent(event);
    setIsUpdate(true);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (id) => {
    axios.delete(`http://localhost:8080/api/v1/event/event/${id}`)
      .then(response => {
        setEvents(events.filter(event => event.id !== id));
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  const handleSaveEvent = () => {
    if (isUpdate) {
      axios.put(`http://localhost:8080/api/v1/event/update/${currentEvent.id}`, currentEvent)
        .then(response => {
          fetchEvents();
          setIsModalOpen(false);
        })
        .catch(error => {
          console.error('Error updating event:', error);
        });
    } else {
      axios.post('http://localhost:8080/api/v1/event/post-event', currentEvent)
        .then(response => {
          fetchEvents();
          setIsModalOpen(false);
        })
        .catch(error => {
          console.error('Error adding event:', error);
        });
    }
  };

  const handleChange = (e) => {
    setCurrentEvent({ ...currentEvent, name: e.target.value });
  };

  return (
    <div className="event-table-container">
      <h2>Event List</h2>
      <button className="add-event" onClick={handleAddEvent}>Add Event</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="event-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>
                  <button onClick={() => handleUpdateEvent(event)}>Update</button>
                  <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isUpdate ? 'Update Event' : 'Add Event'}</h2>
            <input
              type="text"
              value={currentEvent.name}
              onChange={handleChange}
              placeholder="Event Name"
            />
            <button onClick={handleSaveEvent}>{isUpdate ? 'Update' : 'Add'}</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
