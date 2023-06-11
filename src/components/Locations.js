import { read_locations } from "../fetchApi";
import { useEffect, useState } from "react";
import "./Locations.css"

export default function Locations () {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    read_locations().then(data => {
      setLocations(data);
    });
  }, []);

  const sortByName = () => {
    setLocations([...locations].sort((a, b) => a.name > b.name ? 1 : -1));
  };

  const sortByClimate = () => {
    setLocations([...locations].sort((a, b) => a.climate > b.climate ? 1 : -1));
  };

  const sortByTerrain = () => {
    setLocations([...locations].sort((a, b) => a.terrain > b.terrain ? 1 : -1));
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <div className="buttonContainer">
        <button onClick={() => setShowLocations(!showLocations)}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations && (
          <>
            <button onClick={sortByName}>Sort by Name</button>
            <button onClick={sortByClimate}>Sort by Climate</button>
            <button onClick={sortByTerrain}>Sort by Terrain</button>
          </>
        )}
      </div>
      {showLocations && (
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
              <ul>
                <li><span>Name:</span> <span>{location.name}</span></li>
                <li><span>Climate:</span> <span>{location.climate}</span></li>
                <li><span>Terrain:</span> <span>{location.terrain}</span></li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}