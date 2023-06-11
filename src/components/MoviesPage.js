import React, { useState, useEffect } from 'react';
import './MoviesPage.css';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://resource-ghibli-api-pursuit.onrender.com/films')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleChange = (e) => {
    const movieId = e.target.value;
    const movie = movies.find((m) => m.id === movieId);
    setSelectedMovie(movie);
  };

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={handleChange}>
        <option value="">Select...</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie && (
        <div className="movie-details-box">
          <h2>Title: {selectedMovie.title}</h2>
          <p><strong>Release date:</strong> {selectedMovie.release_date}</p>
          <p><strong>Description:</strong> {selectedMovie.description}</p>
        </div>
      )}
    </div>
  );
}

export default MoviesPage;




