import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FilmList from "./Components/FilmList"
import CharacterList from './Components/CharacterList'
import LocationList from './Components/LocationList'
import logo from "./Components/Mac-Miller.jpg"; // Import your logo image
import "./App.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-text">Welcome to GhibliApp</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li>
            <Link to="/" className='nav-link'>
              <img src={logo} alt="Logo" className='nav-logo' />
            </Link>
            <Link to="/films" className='nav-link'>Films</Link>
          </li>
          <li>
            <Link to="/characters" className='nav-link'>Characters</Link>
          </li>
          <li>
            <Link to="/locations" className='nav-link'>Locations</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/locations" element={<LocationList />} />
      </Routes>
    </Router>
  );
}

export default App;


