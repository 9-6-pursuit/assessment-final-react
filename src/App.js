import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Movies from "./Movies.js";
import People from "./People.js";
import Locations from "./Locations.js";



function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
