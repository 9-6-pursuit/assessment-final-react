import React from 'react'
import { useEffect, useState} from 'react'

function Movies(){

    const [movies, setMovies] = useState([])
    const [selected, setSelected] = useState(null)
    
    useEffect(()=>{
        fetch(`https://resource-ghibli-api.onrender.com/films`)
        .then(response=>response.json())
        .then(movies =>{
            setMovies(movies)
            console.log(movies)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])

    let handleOnChange = (event) =>{
        let title = event.target.value
        let selectedMovie = movies.find(movie =>{
            return movie.title === title
        })
        setSelected(selectedMovie)
    }
    return(
        <div className='movies'>
            <h3>The Movies</h3>
            <select onChange={handleOnChange}>
                {movies.map((movie)=>{
                    return(
                        <option key={movie.id}>{movie.title}</option>
                    )
                })}
            </select>
            {selected ? (
                <div>
                    <h3>Title: {selected.title}</h3>
                    <p><strong>Release Date:</strong> {selected.release_date}</p>
                    <p><strong>Description:</strong> {selected.description} </p>
                </div>
            ): null}

        </div>
    )
      
    
}

export default Movies