import { Link } from "react-router-dom";
import "./Nav.css";
// import logoImage from "./your-logo.png";

function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo-link">
        <h3 className="logo">LM</h3>
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="nav-item" to="/movies">Movies</Link>
        </li>
        <li>
          <Link className="nav-item" to="/people">People</Link>
        </li>
        <li>
          <Link className="nav-item" to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
