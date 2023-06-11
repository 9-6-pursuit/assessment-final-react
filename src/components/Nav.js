import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '/Users/joanavelpascual/Pursuit Documents/Module_3/mod-3-final/assessment-final-react/src/components/Images/home-icon.png';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav-container">
      <div>
        <Link className="home-link" to="/">
          <img className="home-icon" src={homeIcon} alt="Home Icon" />
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link movies-link" to="/movies">Movies</Link>
        <Link className="nav-link people-link" to="/people">People</Link>
        <Link className="nav-link locations-link" to="/locations">Locations</Link>
      </div>
    </div>
  );
}
