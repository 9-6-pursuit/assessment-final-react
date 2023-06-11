import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations"







function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "movies" element = {<Movies />}/>
          <Route path = "people" element = {<People />}/>
          <Route path = "locations" element = {<Locations />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
