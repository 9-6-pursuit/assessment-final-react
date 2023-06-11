import { useState } from "react";

export default function Movies({setSelectedMovie, selectedMovie}) {
    const [movies, setMovies] = useState([]);


    let fetchMovies = fetch("https://resource-ghibli-api.onrender.com/Films");

    fetchMovies.then(response => {
        return response.json();
    }).then(movieData => {
        setMovies(movieData);
    }).catch(err => {
        console.log(err);
    })

    const handleSelect =(event)=> {
        let title = event.target.value;
        let movieObj = movies.find((movie) => movie.title === title)
        setSelectedMovie(movieObj)
    }
    //I used event.target to capture the selected movie in the dropbox then I used the find method to find selected movie as an object and return the whole object so I can use it to populate the movie description section on the page

    return (
        <div className="films">
            <h1>Select A Movie</h1>
            <select onChange={handleSelect}>
                <option value=""></option>
                {movies.map((movie) => (
                    <option key={movie.id} value={movie.title}>{movie.title}
                    </option>
                ))}
            </select>
            {selectedMovie && (
             <div className='movie-description'>
                <h2>Title: {selectedMovie.title}</h2>
                <p><span>Release Date:  </span> {selectedMovie.release_date}</p>
                <p><span>Description: </span> {selectedMovie.description}</p>
             </div>
            )}
        </div>
    )
}