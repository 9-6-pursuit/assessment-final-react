import "./Movies.css"
import { useState, useEffect } from "react";

function Movies() {

    const [movies, setMovies] = useState([])
    const [selected, setSelected] = useState (null)

    useEffect(()=> {
        fetch('https://resource-ghibli-api.onrender.com/films')
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setMovies(data)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [])


    let handleOnChange = (event) => {
        console.log(event.target.value)
        let title = event.target.value
        let selecteedMovie = movies.find(movie => {
            return movie.title === title
        })
        setSelected(selecteedMovie)
    }


    return (
      <div className="movies">
            <h1>Select a Movie</h1>
        <select onChange={handleOnChange}>
        <option value=""></option>
            {movies.map((movie) => {
                return(
                <option key={movie.id} >{movie.title}</option>
                )
            })}
        </select>
        {selected ? (
            <div className="aside">
                <h3>Title: {selected.title}</h3>
                <p><strong>Release Date:</strong> {selected.release_date}</p>
                <p><strong>Description:</strong> {selected.description}</p>
            </div>
        ): null}

      </div>
    );
  }
  
  export default Movies;
  