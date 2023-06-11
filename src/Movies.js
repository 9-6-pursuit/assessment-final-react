import { useEffect, useState } from "react";

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/films")
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  }, []);

  const handleFilmChange = (event) => {
    const selectedFilmId = event.target.value;
    if (selectedFilmId === "") {
      setSelectedFilm(null);
    } else {
      const selectedFilmData = films.find((film) => film.id === selectedFilmId);
      setSelectedFilm(selectedFilmData);
    }
  };

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={handleFilmChange}>
        <option value=""></option>
        {films.map((film) => (
          <option key={film.id} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
      {selectedFilm && (
        <div>
          <h2>{selectedFilm.title}</h2>
          <p>Release Date: {selectedFilm.release_date}</p>
          <p>{selectedFilm.description}</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
