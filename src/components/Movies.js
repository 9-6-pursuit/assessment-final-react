import { read_films } from "../fetchApi";
import { useEffect, useState } from "react";
import "./Movies.css"

export default function Movies () {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    read_films().then(data => {
      setFilms(data);
    });
  }, []);

  const handleSelectChange = (event) => {
    const film = films.find(film => film.id === event.target.value);
    setSelectedFilm(film);
  };

  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <select onChange={handleSelectChange}>
        <option value="">Select</option>
        {films.map((film, index) => (
          <option key={index} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
      {selectedFilm && (
        <aside>
          <p className="font-title"><span>Title: </span>{selectedFilm.title}</p>
          <p><span>Release Date: </span>{selectedFilm.release_date}</p>
          <p><span>Description: </span>{selectedFilm.description}</p>
        </aside>
      )}
    </div>  
  );
}
