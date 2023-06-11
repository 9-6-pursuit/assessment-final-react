import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getMovies, getLocation, getPeople } from "./api/fetch";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";


function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState("");
  const [people, setPeople] = useState([]);
  const [locations, setLocations] = useState();
  const [showLocations, setShowLocations] = useState(false);

function handleSelectChange (event) {
  setSelected(movies.find((movie) => movie.id === event.target.value));
}

function toggleShowLocation () {
  setShowLocations(!showLocations)
}

function sortBy (sorter) {
  setLocations([...locations].sort((a, b) => a[sorter].localeCompare(b[sorter])))
}

  useEffect (() => {
getMovies().then((data) => {
  setMovies(data);
}).catch((error) => console.log(error));

getPeople().then((data) => {
  setPeople(data);
}).catch((error) => console.log(error))

getLocation().then((data) => {
  setLocations(data);
}).catch((error) => console.log(error));
  }, [])


  return (
    <div className="app">
      <header><NavBar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/movies" element={<Movies handleSelectChange={handleSelectChange} movies={movies} selected={selected}/>} />
          <Route path="/people" element={<People people={people}/>} />
          <Route path="/locations" element={<Locations locations={locations} showLocations={showLocations} toggleShowLocation={toggleShowLocation} sortBy={sortBy}/>} />
        </Routes>
      </main>
    </div>
  );
}
export default App;