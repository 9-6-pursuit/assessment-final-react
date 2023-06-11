import { useState } from "react";

function Locations() {
    const [locations, setLocations] = useState([]);
    const [showLocations, setShowLocations] = useState(false);

    const handleShowLocations = () => {
        fetch('https://resource-ghibli-api.onrender.com/locations')
          .then(response => response.json())
          .then(locations => setLocations(locations));
          setShowLocations(true)
      };

    function handleHideLocations() {
        setShowLocations(false)
    }

    // function sortByName() {
    //     const sortedLocations = [...locations].sort((a,b) => {
    //         const
    //     )}
    // }
     
    // function sortByClimate() {

    // }
    return (
        <div>
          <button onClick={handleShowLocations}>Show Locations</button>
          {showLocations && (
            <>
              <button onClick={handleHideLocations}>Hide Locations</button>
              {locations.map(location => (
                <ul key={location.id}>
                  <li>Location: {location.name}</li>
                  <li>Climate: {location.climate}</li>
                  <li>Terrain: {location.terrain}</li>
                </ul>
              ))}
            </>
          )}
        </div>
      );
    };
    
    
    export default Locations;