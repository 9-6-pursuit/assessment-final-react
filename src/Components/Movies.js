import React, { useState, useEffect } from "react";
import "./Movies.css";

const Movies = () => {
  // Component state
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch the list of films from Studio Ghibli API or any data source
    // and update the `films` state with the response data
    fetch("https://resource-ghibli-api.onrender.com/films")
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error("Error fetching films:", error));
  }, []);

  const handleFilmChange = (event) => {
    const selectedTitle = event.target.value;
    setSelectedFilm(selectedTitle);

    // Find the selected movie in the films array
    const selectedMovie = films.find((film) => film.title === selectedTitle);
    setSelectedMovie(selectedMovie || null);
  };

  return (
    <div className="movies-container">
      <h1>Select a Movie</h1>
      <select
        value={selectedFilm}
        onChange={handleFilmChange}
        className="select-dropdown"
      >
        <option value=""></option>
        {films.map((film) => (
          <option key={film.id} value={film.title}>
            {film.title}
          </option>
        ))}
      </select>

      {selectedMovie && (
        <div className="movie-details">
          <h2>Title: {selectedMovie.title}</h2>
          <p><strong>Release Date: </strong>{selectedMovie.release_date}</p>
          <p><strong>Description: </strong>{selectedMovie.description}</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
