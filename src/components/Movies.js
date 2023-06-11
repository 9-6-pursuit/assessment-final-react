import {useEffect, useState} from "react";
import "./Movies.css"

function Movies() {

const [movies, setMovies] = useState([])
const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`)
        .then((response) => response.json())
        .then (movies => {
        console.log(movies)
        setMovies(movies)
        })
    })


    let handleOnChange = (event) => {
        let title = event.target.value
        let selectedMovie = movies.find(movie => {
            return movie.title === title
        })
        setSelected(selectedMovie)

    }
    return (
      <div className="movies">
      <h1>Select A Movie</h1>
      <select onChange={handleOnChange}>
           {movies.map((movie) => {
            return(
             
             <option key={movie.id}>{movie.title}</option>
             )
           })}
           </select>
           {selected ? (
            <div>
                <h1>{selected.title}</h1>
                <h4>Released date : {selected.release_date}</h4>
                <h4>Description : {selected.description}</h4>
            </div>
           ) : null}
      </div>
    );
  }

  export default Movies;