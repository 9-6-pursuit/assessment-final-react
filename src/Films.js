import "./Films.css"
import { useEffect, useState } from "react";
export default function Films() {
    const[films, setFilms] = useState([])
    const[selected, setSelected] = useState(null)

    useEffect(()=> {
        fetch('https://resource-ghibli-api.onrender.com/films')
        .then((response) => response.json())
        .then(data => {
            setFilms(data)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [])

    const handleSelectChange = (event) => {
    const film = films.find(film => film.id === event.target.value);
    setSelected(film);
    };

    return (
        <div className="films">
        <h2>Select a Film</h2>
        <select onChange={handleSelectChange}>
          <option value="">Select</option>
          {films.map((film, index) => (
            <option key={index} value={film.id}>
              {film.title}
            </option>
          ))}
        </select>
        {selected && (
          <aside>
            <p className="font-title"><span>Title: </span>{selected.title}</p>
            <p><span>Release Date: </span>{selected.release_date}</p>
            <p><span>Description: </span>{selected.description}</p>
          </aside>
        )}
      </div>
    );
  }
  