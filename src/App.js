import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";

import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const[selected, setSelected] = useState(null)


  console.log(selected)

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

