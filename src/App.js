import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";

import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
