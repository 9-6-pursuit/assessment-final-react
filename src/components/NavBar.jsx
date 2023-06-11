import { Link } from 'react-router-dom'
import "./NavBar.css";


function NavBar() {
    return (
      <div className="nav">
        <img src="" alt="logo" />
        <Link className='nav-p' to='/movies'><p>Movies</p></Link>
        <Link className='nav-p' to='/peoples'><p>People</p></Link>
        <Link className='nav-p' to='locations'><p>Locations</p></Link>
      </div>
    );
  }
  
  export default NavBar;
  