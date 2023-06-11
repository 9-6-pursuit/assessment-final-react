import {useEffect, useState} from "react";
import"./Locations.css"

function Locations() {
    
const [locations, setLocations] = useState([])
const [showLocations, setShowLocations] = useState(false);

useEffect(() => {
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/locations`)
    .then((response) => response.json())
    .then (locations => {
        setLocations(locations)
        console.log(locations)
       })

})

    return (
      <div className="people">
         <h1>List Of Locations</h1>
         {showLocations ? (
        <div>
          <button className="show-more-button" onClick={() => setShowLocations(!showLocations)}>Hide Locations</button>
          <button>Sort By Name</button>
          <button>Sort By Climate</button>
          <button>Sort By Terrain</button>
          {locations.map((location) => {
            return (
                <div className="location">
                    <ul>
                        <li className="name">Name: {location.name}</li>
                        <li className="climate">Climate: {location.climate}</li>
                        <li className="terrain">Terrain: {location.terrain}</li>
                    </ul>
                </div>
            )
          })}
        </div>
      ) : (
        <button className="show-more-button" onClick={() => setShowLocations(!showLocations)}>Show Locations</button>

      )}
      </div>
    );
  }
  
  export default Locations;