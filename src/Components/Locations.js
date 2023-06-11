import React, { useState, useEffect } from "react";
import "./Locations.css";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handleShowLocations = () => {
    setShowLocations(!showLocations);
  };

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByClimate = () => {
    setSortBy("climate");
  };

  const handleSortByTerrain = () => {
    setSortBy("terrain");
  };

  const sortedLocations = [...locations].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    } else if (sortBy === "climate") {
      return a.climate.toLowerCase() < b.climate.toLowerCase() ? -1 : 1;
    } else if (sortBy === "terrain") {
      return a.terrain.toLowerCase() < b.terrain.toLowerCase() ? -1 : 1;
    }
    return 0;
  });

  return (
    <div className="locations-container">
      <h1 className="locations-title">List of Locations</h1>
      <button className="locations-button" onClick={handleShowLocations}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations && (
        <div>
          <div className="sort-buttons">
            <button onClick={handleSortByName}>Sort by Name</button>
            <button onClick={handleSortByClimate}>Sort by Climate</button>
            <button onClick={handleSortByTerrain}>Sort by Terrain</button>
          </div>
          <ul className="location-grid">
            {sortedLocations.map((location) => (
              <li key={location.id} className="location-item">
                <h3>{location.name}</h3>
                <ul>
                  <li>Climate: {location.climate}</li>
                  <li>Terrain: {location.terrain}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Locations;
