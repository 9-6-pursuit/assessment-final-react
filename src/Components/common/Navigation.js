import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div className="nav">
        <nav>
        <Link to="/">LOGO</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/people">People</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    </div>
  )
}

export default Navigation