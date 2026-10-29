import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login({ rData }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  function verification(e) {
    e.preventDefault();

    if (!rData) {
      alert('Please register first!');
      return;
    }

    if (rData.email === email && rData.password === pass) {
      alert('Login successful!');
      console.log('Welcome', rData.name);
      
    } else {
      alert('Invalid email or password!');
    }
  }

  return (
    <div className="container mt-4">
      <h2>Login Form</h2>

      <form onSubmit={verification}>
        <div className="form-group mb-3">
          <label htmlFor="loginEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;