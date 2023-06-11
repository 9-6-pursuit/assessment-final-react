import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

