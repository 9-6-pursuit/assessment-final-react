import React from 'react'
import { useState, useEffect } from "react";
import { getLocations } from './Fetch.js/Fetch';

function Locations() {

    const [allLocations, setAllLocations] = useState([]);
    const [locationsShown, setLocationsShown] = useState(false)


    useEffect(() => {
        getLocations()
        .then((res) => {
          console.log(res);
          setAllLocations([...res])
        });
      }, []);
    
    

    function toggleLocations() {
        setLocationsShown(!locationsShown);
        console.log(allLocations)
      }

  return (
    <div><h1>List of Locations</h1>
    <button onClick={toggleLocations}>{locationsShown ? "Hide Locations" : "Show Locations"}</button>

    {locationsShown ? 
    <ul>
      {allLocations.map((location) => {
        return <Location key={location.id} location={location}/>
      })}

    </ul> 
    : null}</div>
  )
}

export default Locations