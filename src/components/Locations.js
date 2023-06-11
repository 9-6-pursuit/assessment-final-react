import React, { useState } from 'react';
import './Locations.css'

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  const fetchLocations = () => {
    fetch('https://resource-ghibli-api.onrender.com/locations')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.log(error));
  };

  const toggleLocations = () => {
    setShowLocations(prevShowLocations => !prevShowLocations);
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button className='show-location-button' onClick={() => {
        if (!showLocations) {
          fetchLocations();
        }
        toggleLocations();
      }}>
        {showLocations ? 'Hide Locations' : 'Show Locations'}
      </button>

      {showLocations && (
        <ul>
          {locations.map(location => (
            <li key={location.id}>
              <h3>{location.name}</h3>
              <ul>
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
