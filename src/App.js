// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" component={Home} />
      </Routes>
      <h1>Welcome to GhibliApp</h1>
    </Router>
  );
};

export default App;

// <Router>
//       <Header />
//       <Routes>
//         <Route exact path="*" element={<Home/>} />
//         <Route path="/video/:id" element={<Video/>} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//       </Router>