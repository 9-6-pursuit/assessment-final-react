// this is where you add all the imports to the "brain"
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
//import Home from "./components/Home";
import Movies from "./components/Movies"
import People from "./components/People"
import Locations from "./components/Locations"




function App() {
  return (
    <div className="app">
     
     <Navbar />
      <main>
        <Routes>
        <Route path="/" element />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/locations" element={<Locations/>} />
      </Routes>
      </main>
      <Movies/>
     <People/>
     <Locations/>
     

    </div>
  );
}

export default App;
