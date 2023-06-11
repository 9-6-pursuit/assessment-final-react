import { useState, useEffect } from "react"
import { getLocations } from "../fetch"

function Location() {
    const [location, setLocations] = useState([])
    const [clicked, setClicked]=useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    
    const buttonText = clicked ? "Hide Locations" : "Show Locations";

    const listLocations = location.map((location, index) => {  //index is needed for warning and for a key
      return(
        <>
        <hr />
          <div key={ index }>
            <ul>
              <li> Name: { location.name }</li>
              <li> Climate: { location.climate }</li>
              <li> Terrain: { location.terrain }</li>
            </ul>
              <hr/>
          </div>
        </>
      );  
      });


  useEffect(() => {
      async function fetchLocations(){
          try {
              const response = await getLocations()
 
              setLocations(response);
      } catch (error) {
          console.error(error);
      }
  }
  
  fetchLocations();
}, []);

function handleButtonClick(){
  setClicked(!clicked);
};

function handleSortByName() {
  const sortedLocations = location.sort((a, b) => a.name.localeCompare(b.name)); // Sort locations array by name using localeCompare()
  setSelectedOption("name");
  setClicked(true); // Setting clicked state to true shows sorted locations
};

function handleSortByClimate() {
  const sortedLocations = location.sort((a, b) => a.climate.localeCompare(b.climate)); 
  setSelectedOption("climate"); 
  setClicked(true); 
};

function handleSortByTerrain() {
  const sortedLocations = location.sort((a, b) => a.terrain.localeCompare(b.terrain)); 
  setSelectedOption("terrain");
  setClicked(true); 
};



  return (
    <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={handleButtonClick}>
            {buttonText}
            </button>

        {clicked && (
        <>
          <p>Sorted by {selectedOption}</p> {/* Display the selected option */}
          <button onClick={handleSortByName}>Sort by Name</button>
          <button onClick={handleSortByClimate}>Sort by Climate</button>
          <button onClick={handleSortByTerrain}>Sort by Terrain</button>
        </>
      )}

{clicked && <div className='information'><ul>{listLocations}</ul></div>}
    </div>
  );
}

export default Location