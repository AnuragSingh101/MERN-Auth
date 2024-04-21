import React, { useState } from 'react';

const AddBloodForm = () => {
  const [bloodData, setBloodData] = useState({
    bloodType: '',
    quantity: 0,
    expiryDate: '',
    donorId: '' // If applicable, you can populate this with the current user's ID
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send bloodData to backend
    console.log(bloodData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBloodData({
      ...bloodData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Blood Type:</label>
        <input 
          type="text" 
          name="bloodType" 
          value={bloodData.bloodType} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input 
          type="number" 
          name="quantity" 
          value={bloodData.quantity} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Expiry Date:</label>
        <input 
          type="date" 
          name="expiryDate" 
          value={bloodData.expiryDate} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Add Blood</button>
    </form>
  );
};
import React from 'react'

export default  AddBloodForm;