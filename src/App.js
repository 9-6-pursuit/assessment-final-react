import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//Components

import People from "./Components/People";
import Location from "./Components/Location";
import Movies from "./Components/Movies";
import Home from "./Components/Home";
import Navigation from "./Components/common/Navigation"



function App() {
  function handleSubmit(event){
    event.preventDefault();       
}

function handleValueChange(event){
    // setLocations(() => event.target.value)
    // console.log("Location is", event.target.value)
}

  return (
    <div className="app">
      <h1>Welcome to GhibliApp</h1>
      <div className="wrapper">
        <Router>
          <Navigation />
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
