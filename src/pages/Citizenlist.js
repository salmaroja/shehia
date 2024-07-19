import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Citizenlist = () => {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    // Fetch all citizens from backend on component mount
    axios.get('/api/v1/citizen/get-citizens')
      .then(response => {
        setCitizens(response.data);
      })
      .catch(error => {
        console.error('Error fetching citizens: ', error);
      });
  }, []);

  const deleteCitizen = (id) => {
    axios.delete(`/api/v1/citizen/delete-citizen/${id}`)
      .then(response => {
        console.log('Citizen deleted');
        // Refresh the list of citizens after deletion
        axios.get('/api/v1/citizen/get-citizens')
          .then(response => {
            setCitizens(response.data);
          });
      })
      .catch(error => {
        console.error('Error deleting citizen: ', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Citizen List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
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
                <td>{citizen.dateOfBirth}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm me-2" 
                    onClick={() => deleteCitizen(citizen.id)}
                  >
                    Delete
                  </button>
                  {/* Add update button functionality here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Citizenlist;