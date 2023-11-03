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
            <Link to="/course-list">CourseList</Link>
          </li>
          <li>
            <Link to="/course-details">CourseDetails</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
