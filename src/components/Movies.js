import { useEffect, useState } from "react";
import "./Movies.css"

function Movies() {
    const [movies, setMovies] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`)
        .then(response => response.json())
        .then(movies => {
            setMovies(movies)
        })
        .catch(message => {
            console.error(message)
        })
    }, [])

    let handleOnChange = (event) => {
        let title = event.target.value
        let selected = movies.find(movies => {
            return movies.title === title
        })
        setSelected(selected)
    }

    return (
        <div className="movies">
            <h1>Select A Movie</h1>
            <select onChange={handleOnChange}>
                {movies.map((movies) => {
                    return (
                        <option className="option"key={movies.id}>{movies.title}</option>
                    )
                })}
            </select>
            {selected ? (
                <div className="movie-details">
                    <h1>Title: {selected.title}</h1>
                    <h4>Realsed Date: {selected.release_date}</h4>
                    <h4>Description: {selected.description}</h4>
                </div>
            ) : null}
        </div>
    );
  }
  
  export default Movies;