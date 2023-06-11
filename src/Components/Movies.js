// components/Movies.js
import React from 'react';

const Movies = () => {
  const films = [
    { id: '1', title: 'Film 1' },
    { id: '2', title: 'Film 2' },
    { id: '3', title: 'Film 3' },
    // Add more films as needed
  ];

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select>
        <option value="">- Select -</option>
        {films.map((film) => (
          <option key={film.id} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Movies;
