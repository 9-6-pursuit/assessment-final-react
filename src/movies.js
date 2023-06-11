import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState("");

    function getMovies() {
        return fetch(`https://resource-ghibli-api.onrender.com/films`).then((response) => response.json());
    }

    function getSelectedMovieId(e) {
        setSelectedMovieId(e.target.value);
    }

    useEffect(() => {
        getMovies()
            .then((films) => {
                setMovies([...films]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="movies">
            <h2>Select a Movie</h2>
            <select 
                name="movies" 
                id="movie-select"
                onChange={(e) => getSelectedMovieId(e)}
            >
                <option value=""></option>
                {movies.map((movie) => {
                    return (
                        <option key={movie.id} value={movie.id}>
                            {movie.title}
                        </option>
                    );
                })}
            </select>
            {selectedMovieId ? (
                <MovieCard movieId={selectedMovieId} movies={movies} />
            ) : null}
        </div>
    )
}