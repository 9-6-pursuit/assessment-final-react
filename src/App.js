// function App() {
//   return (
//     <div className="app">
//       <h1>Welcome to GhibliApp</h1>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/locations" element={<Locations/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

