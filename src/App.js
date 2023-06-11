import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/location" element={<Locations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
