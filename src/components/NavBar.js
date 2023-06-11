import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <div className='NavBar'>
      <nav>
        <Link to='/movie'><li className='Ghibli'>Movies</li></Link>
        <Link to='/character'><li>Character</li></Link>
        <Link to='/location'><li>Locations</li></Link>
      </nav>
    </div>
  )
}

export default NavBar