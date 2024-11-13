import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitizenForm from './Citizenform'; // Ensure the file name is correctly imported

const CitizenManagement = () => {
  const [citizens, setCitizens] = useState([]);
  const [updatingCitizenId, setUpdatingCitizenId] = useState(null); // State to store the ID of the citizen being updated
  const [count, setCount] = useState(0); // State to store the count of citizens
  const [message, setMessage] = useState(''); // State to store messages
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [currentCitizen, setCurrentCitizen] = useState({ id: null, name: '', address: '', email: '', dateOfBirth: '' });
  const [isUpdateMode, setIsUpdateMode] = useState(false); // State to determine if in update mode

  useEffect(() => {
    fetchCitizens();
    fetchCitizenCount(); // Fetch citizen count when component mounts
  }, []);

  const fetchCitizens = () => {
    axios.get('http://localhost:8080/api/v1/citizen/get-citizen')
      .then(response => {
        setCitizens(response.data);
      })
      .catch(error => {
        console.error('Error fetching citizens: ', error);
      });
  };

  const fetchCitizenCount = () => {
    axios.get('http://localhost:8080/api/v1/citizen/count-citizen')
      .then(response => {
        setCount(response.data); // Set count state with response data
      })
      .catch(error => {
        console.error('Error fetching citizen count: ', error);
      });
  };

  const deleteCitizen = (id) => {
    axios.delete(`http://localhost:8080/api/v1/citizen/citizen/${id}`)
      .then(response => {
        console.log('Citizen deleted');
        fetchCitizens();
        fetchCitizenCount(); 
      })
      .catch(error => {
        console.error('Error deleting citizen: ', error);
      });
  };

  const toggleUpdateMode = (id) => {
    if (id === updatingCitizenId) {
      setUpdatingCitizenId(null);
      setIsUpdateMode(false);
      setCurrentCitizen({ id: null, name: '', address: '', email: '', dateOfBirth: '' }); // Clear current citizen data
    } else {
      setUpdatingCitizenId(id);
      setIsUpdateMode(true);
      const citizenToUpdate = citizens.find(citizen => citizen.id === id);
      setCurrentCitizen({ ...citizenToUpdate });
      setIsModalOpen(true);
    }
  };

  const updateCitizen = () => {
    axios.put(`http://localhost:8080/api/v1/citizen/update/${currentCitizen.id}`, currentCitizen)
      .then(response => {
        console.log('Citizen updated: ', response.data);
        fetchCitizens(); 
        fetchCitizenCount(); 
        setIsModalOpen(false); 
        setUpdatingCitizenId(null); 
        setCurrentCitizen({ id: null, name: '', address: '', email: '', dateOfBirth: '' }); // Clear current citizen data
      })
      .catch(error => {
        console.error('Error updating citizen: ', error);
      });
  };

  const addCitizen = (newCitizen) => {
    axios.post('http://localhost:8080/api/v1/citizen/post-citizen', newCitizen)
      .then(response => {
        console.log('Citizen created');
        setMessage('Citizen created');
        fetchCitizens(); 
        fetchCitizenCount(); 
        setTimeout(() => {
          setMessage(''); 
        }, 3000); 
      })
      .catch(error => {
        console.error('Error creating citizen: ', error);
      });
  };

  const handleChange = (e) => {
    setCurrentCitizen({ ...currentCitizen, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Citizen Management</h2>
      {message && <div className="alert alert-success">{message}</div>} 
      <div>
        <h3>Add New Citizen</h3>
        <CitizenForm fetchCitizens={fetchCitizens} addCitizen={addCitizen} />
      </div>
      <div>
        <h3>All Citizens</h3>
        <p>Total Citizens: {count}</p> 
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {citizens.map(citizen => (
              <tr key={citizen.id}>
                <td>{citizen.id}</td>
                <td>{citizen.name}</td>
                <td>{citizen.address}</td>
                <td>{citizen.email}</td>
                <td>{new Date(citizen.dateOfBirth).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => toggleUpdateMode(citizen.id)}>Update</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteCitizen(citizen.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isUpdateMode ? 'Update Citizen' : 'Add New Citizen'}</h2>
            <input type="text" name="name" value={currentCitizen.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="address" value={currentCitizen.address} onChange={handleChange} placeholder="Address" />
            <input type="text" name="email" value={currentCitizen.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="dateOfBirth" value={currentCitizen.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" />
            <button className="btn btn-success" onClick={updateCitizen}>{isUpdateMode ? 'Update' : 'Add'}</button>
            <button className="btn btn-danger" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitizenManagement;
