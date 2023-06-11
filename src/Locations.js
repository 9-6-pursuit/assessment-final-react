import React, { useEffect, useState } from 'react'
import './Locations.css'

function Locations() {
  const [locations, setLocations] = useState([])
  const [show, setShow] = useState(false)


  useEffect(() => {
    fetch("https://resource-ghibli-api-pursuit.onrender.com/locations")
    .then((response) => response.json())
    .then ((response) =>{
        setLocations(response);
    })
}, []);

  const sortLocations = [...locations]


  function sortByName(){
    setLocations(
      sortLocations.sort((a,b)=>{
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
    )
  }

  function sortByClimate(){
    setLocations(
      sortLocations.sort((a,b)=>{
        if(a.climate.toLowerCase() < b.climate.toLowerCase()) return -1;
        if(a.climate.toLowerCase() > b.climate.toLowerCase()) return 1;
        return 0;
      })
    )
  }

  function sortByTerrain(){
    setLocations(
      sortLocations.sort((a,b)=>{
        if(a.terrain.toLowerCase() < b.terrain.toLowerCase()) return -1;
        if(a.terrain.toLowerCase() > b.terrain.toLowerCase()) return 1;
        return 0;
      })
    )
  }


  return (
    <div className='locations'>
      <h1>List of Locations</h1>
      <button className="showbutton" onClick={(()=> setShow(!show))}>
        {show ? 'Hide Locations' : 'Show Locations'}
      </button>
      {show?(
        <div>
          <section>
            <button onClick={()=>sortByName()}>Sort by Name</button>
            <button onClick={()=>sortByClimate()}>Sort by Climate</button>
            <button onClick={()=>sortByTerrain()}>Sort by Terrain</button>
          </section>

          <ul className='locationList'>
            {locations.map((location)=>{
              return(
                <li key={location.id}>
                  <ul>
                    <li><span>Name:</span> {location.name}</li>
                    <li><span>Climate:</span> {location.climate}</li>
                    <li><span>Terrain:</span> {location.terrain}</li>
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      ):null}
    </div>
  )
}

export default Locations