import { useState, useEffect } from "react"




function MovieList() {
    const [movies, setMovies] = useState([])
    const [selected, setSelected] = useState(null)


    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`)
            .then(response => response.json())
            .then((data) => {
                //console.log(data)
                setMovies(data)
            })
            .catch((error) => console.error(error))
    }, [])

    function handleOnChange(event) {
        // console.log(event.target.value);
        let title = event.target.value
        let selectedMovies = movies.find((movie) => {
            return movie.title === title
        })
        setSelected(selectedMovies)
        //console.log(selectedMovies);
    }

    return (
      <div className="movies" >
        <h3>Select a Movie</h3>
        <select onChange={handleOnChange}>
            <option value=""></option>
        {movies.map(movie => <option key={movie.id}>{movie.title}</option>)}
        </select>
        {selected ? (
            <aside>
                <h2>Title: {selected.title}</h2>
                <p>Release Date: {selected.release_date}</p>
                <p>Description: {selected.description}</p>
            </aside>
        )  : null}
      </div>
    );
  }
  
  export default MovieList;
  