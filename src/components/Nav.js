import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
    return (
        <nav className="nav-bar">
        {/* <Link to="/" className="logo-link">
        <img
          src="src/image/download.png"
          alt="Logo"
          className="logo-image" */}
        {/* /> */}
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/movies">Movies</Link>
            <Link className="nav-item" to="/people">People</Link>
            <Link className="nav-item" to="/locations">Locations</Link>
        </nav>
    );
}
  
export default Nav;