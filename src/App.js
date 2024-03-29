import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/locations" element={<Locations/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
