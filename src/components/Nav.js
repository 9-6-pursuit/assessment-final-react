import { Link } from "react-router-dom";
import "./Nav.css"

export default function Nav() {
  return (
    <nav>
      <p>
        <Link to="/" >
          <img src="https://fakeimg.pl/50x50/" alt="Logo"/>
        </Link>
      </p>
      <ul className="menu-list">
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
}
