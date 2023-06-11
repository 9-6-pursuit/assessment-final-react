import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import People from './Components/People'
import Locations from './Components/Locations'
import Movies from './Components/Movies'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'


function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/people" element={<People />}/>
          <Route path="/locations" element={<Locations />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
