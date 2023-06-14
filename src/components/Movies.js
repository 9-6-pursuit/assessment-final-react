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
        if(title === 'empty'){
            setSelected(null)
        } else{
            setSelected(selectedMovie)
        }
    }
    return(
        <div className='movies'>
            <h1 class='center page-header'>Select a Movie</h1>
            <div class = "search">
                <select onChange={handleOnChange}>
                    <option className='middle'>empty</option>
                    {movies.map((movie)=>{
                        return(
                            <option className='middle' key={movie.id}>{movie.title}</option>
                            )
                        })}
                </select>
            </div>
            {selected ? (
                <div className='movie-details'>
                    <p class='center bigger'><strong>Title:</strong> {selected.title}</p>
                    <p class='center'><strong>Release Date:</strong> {selected.release_date}</p>
                    <p><strong>Description:</strong> {selected.description} </p>
                </div>
            ): null}

        </div>
    )
      
    
}

export default Movies