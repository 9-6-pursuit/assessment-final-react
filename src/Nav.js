import { Link } from "react-router-dom";
import "./Nav.css"
import logo from "./kiki-03.png"

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/people" className="nav-link">
            People
          </Link>
        </li>
        <li>
          <Link to="/locations" className="nav-link">
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
}
