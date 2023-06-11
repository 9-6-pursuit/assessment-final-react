import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../logo.jpeg";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="logo-link">
        <img src={logo} />
      </Link>
      <Link className="nav-item" to="/movies">
        Movies
      </Link>
      <Link className="nav-item" to="/people">
        People
      </Link>
      <Link className="nav-item" to="/locations">
        Locations
      </Link>
    </nav>
  );
}

export default Nav;
