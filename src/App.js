import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components

import People from "./Componenets/People";
import Location from "./Componenets/Location";
import Movies from "./Componenets/Movies";
import Home from "./Componenets/Home";
import React from "react";



function App() {
  function handleSubmit(event){
    event.preventDefault();       
}

function handleValueChange(event){
    setLocations(() => event.target.value)
    console.log("Location is", event.target.value)
}

  return (
    <div className="app">
      <h1>Welcome to GhibliApp</h1>
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="locations" element={<Location />} />
            <Route path="/" element={<Home/>} />
            <Route path="movies" element={<Movies />} />
            <Route path="people" element={<People />} />
          </Routes>
        </Router>


      </div>
    </div>
  );
}

export default App;
