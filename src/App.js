import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Nav from "./components/nav/Nav"
import "./App.css"
import People from "./People"
import Films from "./Films.js"
import Locations from "./Locations"
function App() {
  return (
    <div className="app">
      <Router>
        <Nav/>
        <Routes>
          <Route path ="/" element= {<Home/>}></Route>
          <Route path ="/people" element= {<People/>}></Route>
          <Route path ="/films" element= {<Films/>}></Route>
          <Route path ="/locations" element= {<Locations/>}></Route>
        </Routes>
      </Router>
      <footer>©️2023 @ Monir Hossen. </footer>
    </div>
  );
}

export default App;
