import { Link } from "react-router-dom";
import "./Header.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img
          src="https://files.cults3d.com/uploaders/14307074/illustration-file/3c12b15c-003f-409f-a9b6-b0dcde4495d8/render0001.png"
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
