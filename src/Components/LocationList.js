import React, { useEffect, useState } from 'react';
import "./LocationList.css";

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortedBy, setSortedBy] = useState('');

  useEffect(() => {
    fetch('https://resource-ghibli-api-pursuit.onrender.com/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.log(error));
  }, []);

  const handleShowLocations = () => {
    setShowLocations(!showLocations);
  };

  const handleSortByName = () => {
    const sortedLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));
    setLocations(sortedLocations);
    setSortedBy('name');
  };

  const handleSortByClimate = () => {
    const sortedLocations = [...locations].sort((a, b) => a.climate.localeCompare(b.climate));
    setLocations(sortedLocations);
    setSortedBy('climate');
  };

  return (
    <div className="locations">
      <h1>Studio Ghibli Locations</h1>
      <button onClick={handleShowLocations}>
        {showLocations ? 'Hide Locations' : 'Show Locations'}
      </button>
      {showLocations && (
        <React.Fragment>
          <div>
            <button onClick={handleSortByName} disabled={sortedBy === 'name'}>
              Sort by Name
            </button>
            <button onClick={handleSortByClimate} disabled={sortedBy === 'climate'}>
              Sort by Climate
            </button>
          </div>
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

