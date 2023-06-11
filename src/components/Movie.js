import "./Movie.css"
import { useEffect, useState } from "react";


function Movies() {

    const[movies,setMovies] =useState([])
    const[selected,setSelected] =useState(null)

    useEffect(()=>{
        fetch('https://resource-ghibli-api-pursuit.onrender.com/films')
        .then(response => response.json())
        .then(movies => {
            console.log(movies)
            setMovies(movies)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    let handleOnChange = (event) => {
        // console.log("ON CHANGE")
        // console.log(event.target.value)
        let title = event.target.value
        let selectedMovie = movies.find(movie => {
            return movie.title === title
        })
        setSelected(selectedMovie)
        console.log(selectedMovie)
    }

    return (
      <div className="movies">
        <h3>Select A Movie </h3>
        <select onChange={handleOnChange}>
            <option></option>
            {movies.map((movie) =>{
                return (
                <> 
                    <option key={movie.id}>{movie.title
                    }</option>
                </>
                )
            })}
        </select>
        <br></br>
        {selected ? (
            <div className="result">
                <h1>Title: {selected.title}</h1>
                <h3>Release Date: {selected.release_date}</h3>
                <p>Description: {selected.description}</p>
            </div>
        ) : null}
      </div>
    );
  }
  
// https://resource-ghibli-api-pursuit.onrender.com/
  export default Movies;