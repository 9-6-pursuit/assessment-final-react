import React, { useEffect, useState } from 'react';
import "./FilmList.css"

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState('');
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    fetch('https://resource-ghibli-api-pursuit.onrender.com/films')
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) => console.log(error));
  }, []);

  const handleFilmChange = (event) => {
    const selectedTitle = event.target.value;
    setSelectedFilm(selectedTitle);

    if (selectedTitle === '') {
      setFilmDetails(null); // Reset film details if empty option is selected
    } else {
      // Find the selected film details
      const selectedFilmDetails = films.find((film) => film.title === selectedTitle);
      setFilmDetails(selectedFilmDetails);
    }
  };

  return (
    <div className="film-list">
      <h1>Studio Ghibli Films</h1>
      <h2>Select a Movie</h2>
      <select value={selectedFilm} onChange={handleFilmChange}>
        <option value="">Select an option</option>
        {films.map((film) => (
          <option key={film.id} value={film.title}>
            {film.title}
          </option>
        ))}
      </select>
      {filmDetails && (
        <div>
          <h2>{filmDetails.title}</h2>
          <p>
            <strong>Release Date:</strong> {filmDetails.release_date}
          </p>
          <p>{filmDetails.description}</p>
        </div>
      )}
    </div>
  );
};

export default FilmList;

