import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Header from "./Components/Header.js";
import NavBar from "./Components/NavBar.js";
import Movies from "./Components/Movies.js";
import People from "./Components/People.js";

function App() {
  const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header Header={Header} />}></Route>
        <Route path="/movies" element={<Movies Movies={Movies} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie}/>}></Route>
        <Route path="/people" element={<People People={People}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
