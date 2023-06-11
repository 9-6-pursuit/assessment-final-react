import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="logo-link">
        <img
          src="https://pbs.twimg.com/media/FDdpjdGXEAA98K5.jpg"
          alt="Logo"
          className="logo-image"
        />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
