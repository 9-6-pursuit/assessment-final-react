import { Link } from "react-router-dom";
import "./Header.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img
          src="https://tomplay.com//storage/section-pages/January2022/r0RKvvxgcQpUl0UHAOOJ.png"
          alt="Ghibli-Logo"
        />
      </Link>
      <div className="nav-links">
        <Link to="/movies" className="nav-link">
          Movies
        </Link>
        <Link to="/people" className="nav-link">
          People
        </Link>
        <Link to="/locations" className="nav-link">
          Locations
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
