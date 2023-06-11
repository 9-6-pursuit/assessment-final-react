import { useState, useEffect } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/films/`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.error(error));
    }, []);

    const handleChange = event => {
        // console.log(event.target.value);
        let movie = movies.find(elm => elm.title === event.target.value);
        setSelected(movie);
    }
    
    return (
        <div className="movies">
            <h2>Select a Movie</h2>
            <select onChange={handleChange}>
                <option></option>
                {movies.map(episode => 
                    <option key={episode.id}>{episode.title}</option>
                )}
            </select>
            {selected &&
                <aside>
                    <h2><span>Title:</span> {selected.title}</h2>
                    <p><span>Release Date:</span> {selected.release_date}</p>
                    <p><span>Release Date:</span> {selected.description}</p>
                </aside>
            }
        </div>
    );
}

export default Movies;
