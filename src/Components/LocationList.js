import React, { useEffect, useState } from 'react';

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetch('https://resource-ghibli-api-pursuit.onrender.com/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.log(error));
  }, []);

  const handleShowLocations = () => {
    setShowLocations(!showLocations);
  };

  const handleSortByNameAndClimate = () => {
    const sortedLocations = [...locations].sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name);
      if (nameComparison === 0) {
        return a.climate.localeCompare(b.climate);
      }
      return nameComparison;
    });
    setLocations(sortedLocations);
  };

  return (
    <div className="locations">
      <h1>Studio Ghibli Locations</h1>
      <button onClick={handleShowLocations}>
        {showLocations ? 'Hide Locations' : 'Show Locations'}
      </button>
      {showLocations && (
        <React.Fragment>
          <button onClick={handleSortByNameAndClimate}>
            Sort by Name and Climate
          </button>
          <h2>List of Locations</h2>
          <ul>
            {locations.map((location) => (
              <li key={location.id}>
                <h2>{location.name}</h2>
                <p>Climate: {location.climate}</p>
                <p>Terrain: {location.terrain}</p>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
      {!showLocations && <p>Locations are hidden</p>}
    </div>
  );
};

export default LocationList;
