import React, { useState } from 'react';
import './Customer.css';


const countries = ['United States', 'Canada', 'India', 'Australia', 'United Kingdom'];

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
  });

  const [phoneError, setPhoneError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
     
      const phoneRegex = /^[0-9]*$/;
      if (!phoneRegex.test(value)) {
        setPhoneError('Number cannot be text');
      } else {
        setPhoneError('');
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneError) {
      alert('Please correct the errors before submitting the form.');
    } else {
      console.log(formData);
    }
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <h1 className='heading'>Customer Form</h1>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        {phoneError && <p className="error-message">{phoneError}</p>}
      </div>
      <div className="form-group">
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default CustomerForm;
