// Contact.js
import React, { useState } from 'react';
import './Register.css';
import apiClient from '../communication/apiClient'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { delay } from "lodash";

/////////////////////////////////////////////////////////
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  //_____________________________________________________________________________________________________________________________
  const btn_submit = async(e) => 
  {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const requestParams  = {
        name,
        email,
        timestamp: Date.now(),
        version: '1.0'
      };
      const resp=handleLogin(requestParams);
      navigate("/login"); // Redirect to "AnotherPage" after 3 seconds
  };
  ////////////////////////////////////////////
  const handleLogin = async (requestParams) => {
    try {
        const val={
          params: requestParams,
          headers: 
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-token-here'
          }
        } 
        const response = await apiClient.get('/register', val);
        return response;
    } catch (error) {
      console.error(error.response?.data || 'Submission error.. Try Again');
    }
  };
//_____________________________________________________________________________________________________________________________
const handleName = (e) => {
    setName(e.target.value);
};
//_____________________________________________________________________________________________________________________________
const handleEmail = (e) => {
  setEmail(e.target.value);
};
//_____________________________________________________________________________________________________________________________
  return (
    <div className="contact-container">
      <h2>USER REGISTRATION</h2>
      <form className="contact-form"  >

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleName} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleEmail}/>
        </div>

        <button className="submit-button" onClick={btn_submit}>Submit</button>
      </form>
    </div>
  );
  /////////////////////////////////////////////////////////////////////////////
};
export default Register;
