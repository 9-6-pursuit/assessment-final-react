import "./Locations.css";
import { useState, useEffect } from "react";

function Locations() {
  const [allLocations, setAllLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllLocations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let handleToggleLocations = () => {
    setShowLocations(!showLocations);
  };

  let handleSortByName = () => {
    setSortOption("name");
  };

  let handleSortByClimate = () => {
    setSortOption("climate");
  };
  let handleSortByTerrain = () => {
    setSortOption("terrain")
  }

  useEffect(() => {
    if (sortOption) {
      const sortedLocations = [...allLocations].sort((a, b) => {
        if (sortOption === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortOption === "climate") {
          return a.climate.localeCompare(b.climate);
        } else if (sortOption === "terrain") {
          return a.terrain.localeCompare(b.terrain);
        }
      });
      setAllLocations(sortedLocations);
    }
  }, [sortOption]);

  return (
    <div className="locations">
      <h1>List of Locations</h1>

      <div className="buttons-row">
        <button type="button" onClick={handleToggleLocations}>
          {showLocations ? "HIDE LOCATIONS" : "SHOW LOCATIONS"}
        </button>
        {showLocations && (
          <div className="sort-buttons-container">
            <button type="button" onClick={handleSortByName}>
              SORT BY NAME
            </button>
            <button type="button" onClick={handleSortByClimate}>
              SORT BY CLIMATE
            </button>
            <button type="button" onClick={handleSortByTerrain}>
              SORT BY TERRAIN
            </button>
          </div>
        )}
      </div>

      {showLocations && (
        <ul>
          {allLocations.map((location) => (
            <li key={location.id}>
              <ul>
                <li>Name: {location.name}</li>
                <li>Climate: {location.climate}</li>
                <li>Terrain: {location.terrain}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Locations;
