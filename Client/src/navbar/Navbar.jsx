import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css';
import Alemeno from '../assets/image/Alemeno_Logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Alemeno} alt="Logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">COURSELIST</Link>
          </li>
          <li>
            <Link to="/course-details">COURSEDETAILS</Link>
          </li>
          <li>
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/signup">SIGNUP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
