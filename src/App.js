import './App.css';
import Home from "./components/Home"
import Nav from "./components/Nav"
import Locations from "./components/Locations"
import People from "./components/People"
import Movies from "./components/Movies"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

function App() {
//   const[selected, setSelected] = useState(null)
// console.log(selected)

return (
  <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/locations" element={<Locations />}/>
      </Routes>
    </Router>
  </div>
);
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/movies" element={<Movies />} /> */}
//           <Route path="/people" element={<People />} />
//           <Route path="/locations" element={<Locations />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

