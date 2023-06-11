






import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    return (
      <nav>
        <img src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=2000" alt="Logo" width="50" height="50" onClick={() => navigate("/")} />
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    );
  }
  

export default NavBar;

