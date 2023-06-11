import "./Locations.css"
import { useEffect, useState } from "react";
export default function Locations() {
    const[locations, setLocations] = useState([])
    const[location, setLocation] = useState(false)

    useEffect(()=> {
        fetch('https://resource-ghibli-api.onrender.com/locations')
        .then((response) => response.json())
        .then(data => {
            setLocation(data)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [])

    const sortByName = () => {
        setLocations([...locations].sort((a, b) => a.name > b.name ? 1 : -1));};
    
      const sortByClimate = () => {
        setLocations([...locations].sort((a, b) => a.climate > b.climate ? 1 : -1));};
    
      const sortByTerrain = () => {
        setLocations([...locations].sort((a, b) => a.terrain > b.terrain ? 1 : -1));
      };
    
      return (
        <div className="locations">
          <h2>List of Locations</h2>
          <div className="buttonContainer">
            <button onClick={() => setLocation(!location)}>
              {location ? "Hide Locations" : "Show Locations"}
            </button>
            {location && (
              <>
                <button onClick={sortByName}>Sort by Name</button>
                <button onClick={sortByClimate}>Sort by Climate</button>
                <button onClick={sortByTerrain}>Sort by Terrain</button>
              </>
            )}
          </div>
          {location && (
            <ul>
              {locations.map((location, index) => (
                <li key={index}>
                  <ul>
                    <li><span>Name:</span> <span>{location.name}</span></li>
                    <li><span>Climate:</span> <span>{location.climate}</span></li>
                    <li><span>Terrain:</span> <span>{location.terrain}</span></li>
                  </ul>
                </li>
              ))}
            </ul>
          )}
      </div>
    );
  }
  