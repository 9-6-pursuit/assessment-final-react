import { Link } from "react-router-dom"
import "./Nav.css"
import logo from "../logo.png";

function Nav() {
    return (
        <nav>
            <Link to={'/'} className='logo-link'>
                <img src={logo} />
            </Link>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/people'}>People</Link>
            <Link to={'/locations'}>Locations</Link>
        </nav>
    );
}
  
export default Nav;

