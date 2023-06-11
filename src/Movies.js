import React, { useEffect, useState } from 'react'
import './Movies.css'

function Movies() {
    const [movies, setMovies] = useState([])
    const [select, setSelect] = useState({})


    function handleOption(e){
        const selected = movies.find((movie) => movie.id === e.target.value)
        setSelect(selected || {});
    }

    useEffect(() => {
        fetch("https://resource-ghibli-api-pursuit.onrender.com/films")
        .then((response) => response.json())
        .then ((response) =>{
            setMovies(response);
        })
    }, []);


  return (
    <div className='movies'>
        <h1 className='select-a-movie'>Select a Movie</h1>
        <div className='selection'>
            <select onChange={handleOption}>
                <option value=""></option>
                    {movies.map((movie)=>{
                        return (<option key={movie.id} value={movie.id}>{movie.title}</option>)
                    })}
            </select>
        </div>

        {select.id ?(
            <div className='desc'> 
                <h2 className='title'><span>Title</span>: {select.title}</h2>
                <p><span>Release Date</span>: {select.release_date}</p>
                <p><span>Description</span>: {select.description}</p>
            </div>
        ):null}
    </div>
  )
}

export default Movies