import React, { useState } from 'react';
import './UserRegister.css';

const UserRegister = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    department: '',
    orgId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRegister) {
      onRegister(formData);
    }
  };

  return (
    <div className="register-card">
      <h2 className="register-title">Register User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Enter department"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orgId">Org ID</label>
          <input
            type="number"
            id="orgId"
            name="orgId"
            value={formData.orgId}
            onChange={handleInputChange}
            placeholder="Enter Org ID"
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
