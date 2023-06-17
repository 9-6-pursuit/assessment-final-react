import React, { useState, useEffect } from "react";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const handleToggleLocations = () => {
    setShowLocations(!showLocations);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        console.log(data);
      })
      .catch((error) => console.log("Error fetching people:", error));
  };

  const handleSortByName = () => {
    const sortedLocations = [...locations].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setLocations(sortedLocations);
    setSortOrder("name");
  };

  const handleSortByClimate = () => {
    const sortedLocations = [...locations].sort((a, b) =>
      a.climate.localeCompare(b.climate)
    );
    setLocations(sortedLocations);
    setSortOrder("climate");
  };

  const handleSortByTerrain = () => {
    const sortedLocations = [...locations].sort((a, b) =>
      a.terrain.localeCompare(b.terrain)
    );
    setLocations(sortedLocations);
    setSortOrder("terrain");
  };

  return (
    <div className="locations">
      <h1 className="location-title" style={{ textAlign: "center" }}>
        List of Locations
      </h1>
      <button type="button" onClick={handleToggleLocations}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations && (
        <div>
          <div className="sort-buttons">
            <button
              type="button"
              onClick={handleSortByName}
              disabled={sortOrder === "name"}
            >
              Sort by Name
            </button>
            <button
              type="button"
              onClick={handleSortByClimate}
              disabled={sortOrder === "climate"}
            >
              Sort by Climate
            </button>
            <button
              type="button"
              onClick={handleSortByTerrain}
              disabled={sortOrder === "terrain"}
            >
              Sort by Terrain
            </button>
          </div>
          <ul>
            {locations.map((location) => (
              <li key={location.id}>
                <ul className="details">
                  <li>
                    <strong>Name:</strong>
                    <span className="location-name">{location.name}</span>
                  </li>
                  <li>
                    <strong>Climate:</strong>
                    <span className="location-climate">{location.climate}</span>
                  </li>
                  <li>
                    <strong>Terrain:</strong>
                    <span className="location-terrain">{location.terrain}</span>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Locations;
