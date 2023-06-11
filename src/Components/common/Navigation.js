import { Link } from "react-router-dom"
import "./Navigation.css";
import "./ElectricYellow Pursuit_Zoom_Background.jpeg"

function Navigation() {
  return (
    <div className="nav">
      <a href="/"> <img className="logo"  alt="yellow block" src="./ElectricYellow Pursuit_Zoom_Background.jpeg" /></a>
        <nav>
          <Link id="logo" to="/"></Link>
          <Link to="/movies">Movies</Link>
          <Link to="/people">People</Link>
          <Link to="/locations">Locations</Link>
        </nav>
    </div>
  )
}

export default Navigation