import React from 'react';
import '../App.css';

const ContactUs = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form>
        <label>Name: <input type="text" /></label>
        <label>Email: <input type="email" /></label>
        <label>Message: <textarea /></label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
