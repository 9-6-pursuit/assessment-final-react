import { Link } from 'react-router-dom'
import "./NavBar.css";


function NavBar() {
    return (
      <div className="nav">
       <Link to='/'><img src="" alt="logo" /></Link> 
        <Link to='/movies'><p>Movies</p></Link>
        <Link to='/peoples'><p>People</p></Link>
        <Link to='locations'><p>Locations</p></Link>
      </div>
    );
  }
  
  export default NavBar;
  