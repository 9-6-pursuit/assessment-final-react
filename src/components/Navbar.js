import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../logo.png"

function Navbar() {
    return (
      <nav className="navbar">
           <Link to="/" ><img src={logo} alt="logo" width="50" height="50" /> </Link>
           <Link to="/movies">Movies</Link>
           <Link to="/people">People</Link>
           <Link to="/locations">Locations</Link>
      </nav>
    );
  }
  
  export default Navbar;