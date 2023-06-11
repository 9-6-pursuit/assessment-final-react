// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

// Rest of the code...


const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="https://w7.pngwing.com/pngs/401/779/png-transparent-studio-ghibli-hd-logo.png" alt="Logo" width="50" height="50" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
