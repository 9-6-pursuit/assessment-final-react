import './App.css';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import Movies from "./components/Movies.js"
import People from "./components/People.js"
import Locations from "./components/Locations.js"

function App() {
  return (
    <div className="app">
      <Router>
            <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/movies" element={<Movies /> } />
            <Route path="/people" element={<People />} />  
            <Route path="/locations" element={<Locations />} /> 
            </Routes>
      </Router>
    </div>
  );
}

export default App;
