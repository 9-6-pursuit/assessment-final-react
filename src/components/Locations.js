import { useState } from "react";

function Locations() {
    const [locations, setLocations] = useState([]);

    const handleShowLocations = () => {
        fetch("https://resource-ghibli-api.onrender.com/locations")
          .then(response => response.json())
          .then(locations => setLocations(locations));
      };
      return (
        <div>
          <button onClick={handleShowLocations}>Show Locations</button>
          {locations.map(location => (
            <div key={location.id}>
              <h3>Location: {location.name}</h3>
              <p>Name: {location.climate}</p>
              <p>Terrain: {location.terrain}</p>
            </div>
          ))}
        </div>
      );
    };

    export default Locations;