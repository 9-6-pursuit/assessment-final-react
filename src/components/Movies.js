import React, { useEffect, useState } from 'react';
import './Movies.css'

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState('');
  const [selectedFilmInfo, setSelectedFilmInfo] = useState(null);

  useEffect(() => {
    fetch('https://resource-ghibli-api.onrender.com/films')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.log(error));
  }, []);

  const handleFilmChange = (event) => {
    const selectedFilmId = event.target.value;
    setSelectedFilm(selectedFilmId);

    if (selectedFilmId) {
      const film = films.find(f => f.id === selectedFilmId);
      setSelectedFilmInfo(film);
    } else {
      setSelectedFilmInfo(null);
    }
  };

  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <select className='select-movie' value={selectedFilm} onChange={handleFilmChange}>
        <option value="">- Select -</option>
        {films.map(film => (
          <option key={film.id} value={film.id}>{film.title}</option>
        ))}
      </select>

      {selectedFilmInfo && (
        <div>
          <h3>{selectedFilmInfo.title}</h3>
          <p>Release Date: {selectedFilmInfo.release_date}</p>
          <p>Description: {selectedFilmInfo.description}</p>
        </div>
      )}
    </div>
  );
}
