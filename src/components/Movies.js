import React from 'react'
import { useState, useEffect } from 'react';
import { getAllFilms } from '../api/fetch';

function Movies() {
    const [films, setFilms] = useState([]);
    const [selectFilms, setSelectedFilms] = useState(null);


    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`)
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            setFilms(response);
        })
          .catch((error) => {
            console.error(error);
           });
      }, []);

      const handleOnChange = (event) => {
        let selectedValue = event.target.value
        let selectFilms = films.find((film) => {
            return film.title === selectedValue;
        })
        setSelectedFilms(selectFilms)
      }

  return (
    <div>
        <div className='movies'>
        <h2>Select a Movie</h2>
            <select onChange={handleOnChange}>
                {
                    films.map((film) => {
                        // console.log(film.title);
                        return <option key={film.id}>{film.title}</option>
                    })
                }
            </select>
            {
                selectFilms ? (
                    <div>
                        <h1>Title: {selectFilms.title}</h1>
                        <p> <span>Release Date:</span> {selectFilms.release_date}</p>
                        <p> <span>Description:</span> {selectFilms.description}</p>
                    </div>
                ): null
            }
        </div>
    </div>
  )
}

export default Movies