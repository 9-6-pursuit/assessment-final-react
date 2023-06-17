import React from "react";
import { useState, useEffect } from "react";

// import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleSelectChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch("https://resource-ghibli-api.onrender.com/films")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      })
      .catch((error) => console.log("Error fetching movies:", error));
  };
  const selectedMovieData = movies.find((movie) => movie.id === selectedMovie);

  return (
    <div className="movies">
      <h1 className="title">Select a Movie</h1>
      <select value={selectedMovie} onChange={handleSelectChange}>
        <option value=""> </option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>

      {selectedMovieData && (
        <div className="movie-details">
          <aside>
            <h2>Title: {selectedMovieData.title}</h2>
            <p>
              <strong>Release Date:</strong> {selectedMovieData.release_date}
            </p>
            <p>
              <strong>Description:</strong> {selectedMovieData.description}
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Movies;
