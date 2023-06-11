import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import People from "./components/People";
import Location from "./components/Locations";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<h1> Welcome to GhibliApp </h1>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/location" element={<Location/>} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;