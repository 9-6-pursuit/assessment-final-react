import logo from "./ghibli-logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-bar">
            <Link className="nav-item" to='/'><img src={logo} /></Link>
            <Link className="nav-item" to='/movies'>Movies</Link>
            <Link className="nav-item" to='/people'>People</Link>
            <Link className="nav-item" to='/locations'>Locations</Link>
        </nav>
    );
}

export default Navbar;
