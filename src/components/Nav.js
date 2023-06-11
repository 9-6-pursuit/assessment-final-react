import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="nav">
      <Link className="navbar" to="/"> Home </Link>
      <Link className="navbar" to="/movies"> Movies </Link>
      <Link className="navbar" to="/people"> People </Link>
      <Link className="navbar" to="/location"> location </Link>
    </nav>
  );
}

export default Nav;