import React, { useState, useEffect } from 'react';
import './LocationsPage.css';

function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetch('https://resource-ghibli-api-pursuit.onrender.com/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  const handleShowLocations = () => {
    setShowLocations(!showLocations);
  };

  const sortBy = (field) => {
    const sortedLocations = [...locations].sort((a, b) =>
      a[field].localeCompare(b[field])
    );
    setLocations(sortedLocations);
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <div className="buttons">
        <button onClick={handleShowLocations}>
          {showLocations ? 'Hide Locations' : 'Show Locations'}
        </button>
        {showLocations && (
          <>
            <button onClick={() => sortBy('name')}>Sort by Name</button>
            <button onClick={() => sortBy('climate')}>Sort by Climate</button>
            <button onClick={() => sortBy('terrain')}>Sort by Terrain</button>
          </>
        )}
      </div>
      {showLocations && (
        <ul>
          {locations.map(location => (
            <li key={location.id} className="location-box">
              <ul> 
                <li><strong>Name:</strong> {location.name}</li>
                <li><strong>Climate:</strong> {location.climate}</li>
                <li><strong>Terrain:</strong> {location.terrain}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocationsPage;


