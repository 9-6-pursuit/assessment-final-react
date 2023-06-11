// function App() {
//   return (
//     <div className="app">
//       <h1>Welcome to GhibliApp</h1>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import PeoplePage from './components/PeoplePage';
import LocationsPage from './components/LocationsPage';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/locations" element={<LocationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;


