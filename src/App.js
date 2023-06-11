import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Home from "./components/Home";
import People from "./components/People";
import {Router, Routes, Route} from 'react-router-dom';
import Locations from "./components/Locations";

function App() {
  return (
    <div className="app">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/people" element={<People />}/>
          <Route path="/locations" element={<Locations />}/>
        </Routes>
    </div>
  );
}

export default App;
