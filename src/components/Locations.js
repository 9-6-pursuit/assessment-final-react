
import React from 'react'
import { useState, useEffect } from 'react'

function Locations() {
    const [dahButton, setDahButton] = useState(false)
    const [places, setPlaces] = useState([])
    const [seeLocations,setSeeLocations] = useState(false)


    useEffect(()=>{
        fetch(`https://resource-ghibli-api.onrender.com/locations`)
        .then(response=>response.json())
        .then(places =>{
            setPlaces(places)
            console.log(places)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])

    let toggleThatButton = () =>{
        setDahButton(!dahButton)
        setPlaces(places)
    }
      
  return (
    <div className='locations'>
        <h3>List of Locations</h3>
        <button onClick={toggleThatButton}>
        {dahButton ? 'Hide Locations' : 'Show Locations'}
        </button>
        {dahButton && (
        <div>
          <button>Sort by Name</button>
          <button>Sort by Climate</button>
          <button>Sort by Terrain</button>
        </div>
      )}
        {!seeLocations ? (
        <ul>
          {places.map(place => (
            <ul>
              <li key={place.id}>
                <ul>
                  <li>Climate:{place.climate}</li>
                  <li>Name: {place.name}</li>
                  <li>Terrain:{place.terrain}</li>
                </ul>
              </li>
            </ul>
          ))}
          </ul>):null}
    </div>
  )
  }

export default Locations;