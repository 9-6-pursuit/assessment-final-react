import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Movies from "./movies";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
