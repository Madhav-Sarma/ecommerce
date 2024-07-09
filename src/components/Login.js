import React from 'react';
import '../App.css';

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label>Email: <input type="email" /></label>
        <label>Password: <input type="password" /></label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
