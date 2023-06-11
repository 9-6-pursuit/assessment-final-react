import React from 'react'
import { useState, useEffect } from "react";
import { getMovies } from './Fetch.js/Fetch';
import Movie from './Movie';

function Movies() {

    const [allMovies, setAllMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [isMovieSelected, setIsMovieSelected] = useState(false)


    useEffect(() => {
        getMovies()
        .then((res) => {
          console.log(res)
          setAllMovies(res)
        })
      }, []);

      function onMovieSelection(event) {
        let movieIndex = event.target.value;
    
       if(movieIndex > -1) {
        setMovie(allMovies[movieIndex]);
        setIsMovieSelected(true);
       } else {
        setMovie({});
        setIsMovieSelected(false);
       }
      }

  return (
    <div className="movies">
        <h1>Select a Movie</h1>
      <select onChange={onMovieSelection}>
        <option value={-1}></option>
        {allMovies.map((movie, index) => {
          return (<option value={index} key={movie.id}>{movie.title}</option>)
        })}
      </select>

      {isMovieSelected ? <aside>
      <Movie movie={movie}/>
    </aside> 
    : null}
    </div>
  )
}

export default Movies