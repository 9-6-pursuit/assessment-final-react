import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../logo.jpeg"

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="logo-link">
      <img src={logo} />
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
