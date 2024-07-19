import React from 'react';
import axios from 'axios';


const Citizen = ({ citizen, fetchCitizens }) => {
  const handleDelete = async (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this citizen?');
    if (!confirmation) {
      return;
    }
    
    try {
      const response = await axios.delete(`http://localhost:8080/cc/citizen/${id}`);
      if (response.status === 200) {
        fetchCitizens(); // Refresh citizen list after deletion
        alert('Citizen deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting citizen:', error);
      alert('Failed to delete citizen');
    }
  };

  const handleUpdate = () => {
    // Implement update functionality here if needed
  };

  if (!citizen || !citizen.name) {
    return null; // Return null or render a placeholder if citizen data is not valid
  }

  return (
    <tr>
      <td>{citizen.name}</td>
      <td>{citizen.address}</td>
      <td>{citizen.email}</td>
      <td>{citizen.dateOfBirth}</td>
      <td>
        <button className="btn btn-sm btn-info mr-2" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(citizen.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Citizen;
