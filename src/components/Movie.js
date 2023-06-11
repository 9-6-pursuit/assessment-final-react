import React from 'react'

function Movie({movie}) {
  return (
    <aside>
    <h2><span>Title:</span> {movie.title}</h2>
    <p><span>Release Date:</span> {movie.release_date}</p>
    <p><span>Description:</span> {movie.description}</p>
  </aside>);
}

export default Movie