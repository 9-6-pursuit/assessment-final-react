import Movies from "./components/Movies";
import Character from "./components/Character";
import Locations from "./components/Locations";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Nav> */}
      <Routes>
        <Route path="/movies" element= {<Movies/>}/>
        <Route path="/character" element= {<Character/>}/>
        <Route path="/location" element= {<Locations/>}/>
      </Routes>
    </Router>
  );
}

export default App;
