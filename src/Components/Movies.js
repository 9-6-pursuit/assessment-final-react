import { useEffect, useState } from "react";

function Movies() {
    const [movies, setMovies] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/films`)
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
        let selectedMovie = movies.find(movie => {
            return movie.title === title
        })
        setSelected(selectedMovie)
    }

    return (
        <div className="movies text-center">
            <h3>Studio Ghibil Movies</h3>
            <select onChange={handleOnChange}>
                <option></option>
                {movies.map((movie) => {
                    return (
                        <option key={movie.id}>{movie.title}</option>
                    )
                })}
            </select>
            {selected ? (
                <div>
                    <h1><strong>Title: </strong>{selected.title}</h1>
                    <h3><strong>Release Date: </strong>{selected.release_date}</h3>
                    <h3><strong>Desctiption: </strong>{selected.description}</h3>
                </div>
            ) : null}
        </div>
  )
  }
  
  export default Movies;
  