// import { error } from "cypress/types/jquery"
import { useEffect, useState } from "react"

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [selected, setSelected] = useState(null)


    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/films`)
        .then(response => response.json())
        .then(movies => {
            setMovies(movies)
        })
        .catch((message => {
            console.error(message)
        }))
    }, [])

    let handleOnChange = (e) => {
        let title = e.target.value
        let selectedMovie = movies.find(movie => {
            return movie.title === title
        })
        setSelected(selectedMovie)
    }


    return (
    <>
        <div className="movies">
            <h1>Movies</h1>
            <select onChange={handleOnChange}>
                {movies.map((movie) => {
                    return(
                        <option key={movie.id}>{movie.title}</option>
                    )
                })}
            </select>
            {selected ? (
            <div>
                <h1><b>Title:</b> {selected.title}</h1>
                <h4><b>Release Date:</b> {selected.release_date}</h4>
                <h4><b>Description:</b> {selected.description}</h4>
            </div>
            ): null
            }
        </div>
    </>
    )
}