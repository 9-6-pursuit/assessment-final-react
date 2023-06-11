import React, { useState, useEffect } from "react";

export default function Locations() {
  const [showLocations, setShowLocations] = useState(false);
  const [locations, setLocations] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleLocations = () => {
    setShowLocations(!showLocations);
  };

  const sortByName = () => {
    setSortBy("name");
  };

  const sortByClimate = () => {
    setSortBy("climate");
  };

  const sortByTerrain = () => {
    setSortBy("terrain");
  };

  const sortLocations = (a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "climate") {
      return a.climate.localeCompare(b.climate);
    } else if (sortBy === "terrain") {
      return a.terrain.localeCompare(b.terrain);
    }
    return 0;
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={toggleLocations}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations && (
        <>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={sortByClimate}>Sort by Climate</button>
          <button onClick={sortByTerrain}>Sort by Terrain</button>
        </>
      )}
      {showLocations && (
        <ul className="location-list">
          {locations.sort(sortLocations).map((location) => (
            <li key={location.id}>
              <h3>Name: {location.name}</h3>
              <ul>
                <li className="list">Climate: {location.climate}</li>
                <li className="list">Terrain: {location.terrain}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

