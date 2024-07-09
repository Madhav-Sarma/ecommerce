import React from 'react';
import '../App.css';

const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <label>First Name: <input type="text" /></label>
        <label>Last Name: <input type="text" /></label>
        <label>Email: <input type="email" /></label>
        <label>Password: <input type="password" /></label>
        <label>Confirm Password: <input type="password" /></label>
        <label>Phone Number: <input type="tel" /></label>
        <label>Address Line 1: <input type="text" /></label>
        <label>Address Line 2: <input type="text" /></label>
        <label>City: <input type="text" /></label>
        <label>State: <input type="text" /></label>
        <label>Zip Code: <input type="text" /></label>
        <label>Country: <input type="text" /></label>
        <label>Date of Birth: <input type="date" /></label>
        <label>Gender: 
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>Profile Picture: <input type="file" /></label>
        <button type="submit">Register</button>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
