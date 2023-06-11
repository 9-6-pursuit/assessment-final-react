// function Locations() {
//     return (
//       <div className="locations">
//       </div>
//     );
//   }

//   export default Locations;


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


// import { useState, useEffect } from "react";

// function Locations() {
//   const [locations, setLocations] = useState([]);
//   const [inputTerm, setInputTerm] = useState(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     fetch("https://resource-ghibli-api.onrender.com/locations")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setLocations(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   let handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target.elements.locationsName.value);
//     let name = event.target.elements.locationsName.value;
//     let inputtedLocations = locations.find((locations) => {
//       return locations.name === name;
//     });
//     setInputTerm(inputtedLocations);
//     setIsSubmitted(true);
//     setInputValue("");
//   };

//   let handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div className="locations">
//       <h1>List of locations</h1>
//       <form onSubmit={handleOnSubmit}>
//         <input
//           type="text"
//           name="LocationsName"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Submit</button>
//         {isSubmitted && !inputTerm ? (
//           <p>Not Found</p>
//         ) : inputTerm ? (
//           <div>
//             <h2>Name: {inputTerm.name}</h2>
//             <p>
//               <strong>Climate:</strong> {inputTerm.climate}
//             </p>
//             <p>
//               <strong>Terrain:</strong> {inputTerm.terrain}
//             </p>
            
//           </div>
//         ) : null}
//       </form>
//     </div>
//   );
// }

// export default Locations;