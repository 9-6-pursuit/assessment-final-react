import { useEffect, useState } from "react";

function Films() {
    const [films, setFilms] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/films`)
        .then(response => response.json())
        .then(films => {
            setFilms(films)
        })
        .catch(message => {
            console.error(message)
        })
    }, [])

    let handleOnChange = (event) => {
        let title = event.target.value
        let selectedFilm = films.find(film => {
            return film.title === title
        })
        setSelected(selectedFilm)
    }

    return (
        <div className="films">
            <h3>Studio Ghibli Films</h3>
            <select onChange={handleOnChange}>
                {films.map((film) => {
                    return (
                        <option key={film.id}>{film.title}</option>
                    )
                })}
            </select>
            {selected ? (
                <div>
                    <h3>Title: {selected.title}</h3>
                    <h4>Release Date: {selected.release_date}</h4>
                    <p>Description: {selected.description}</p>
                </div>
            ) : null}
        </div>
    );
  }
  
  export default Films;