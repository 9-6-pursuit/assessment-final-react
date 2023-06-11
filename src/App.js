import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Nav from "./Nav";
import Movies from "./Movies";
import People from "./People";
import Locations from "./Locations";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default App;
