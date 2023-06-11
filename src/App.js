import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import People from "./components/People";
import Location from "./components/Location";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="main">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/peoples" element={<People/>}/>
        <Route path="/locations" element={<Location/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
