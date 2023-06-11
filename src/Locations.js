import { useState, useEffect } from "react";

const Locations = () => {
  const [showLocations, setShowLocations] = useState(false);
  const [locations, setLocations] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);

  const handleShowHideClick = () => {
    setShowLocations(!showLocations);
  };

  const handleSortByNameClick = () => {
    if (sortedBy === "name") {
      setLocations([...locations].reverse());
    } else {
      setLocations([...locations].sort((a, b) => a.name.localeCompare(b.name)));
    }
    setSortedBy("name");
  };

  const handleSortByClimateClick = () => {
    if (sortedBy === "climate") {
      setLocations([...locations].reverse());
    } else {
      setLocations(
        [...locations].sort((a, b) => a.climate.localeCompare(b.climate))
      );
    }
    setSortedBy("climate");
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={handleShowHideClick}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations && (
        <>
          <button onClick={handleSortByNameClick}>Sort by Name</button>
          <button onClick={handleSortByClimateClick}>Sort by Climate</button>
          {locations.length > 0 ? (
            <ul>
              {locations.map((location) => (
                <li key={location.id}>
                  <h3>{location.name}</h3>
                  <ul>
                    <li>Climate: {location.climate}</li>
                    <li>Terrain: {location.terrain}</li>
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>No locations found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Locations;
