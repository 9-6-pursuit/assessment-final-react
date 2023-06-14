import React from 'react'
import { useState, useEffect } from 'react'

function Locations() {
    const [dahButton, setDahButton] = useState(false) 
    const [places, setPlaces] = useState([]) 



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

    const toggleThatButton = () =>{
        setDahButton(!dahButton)
        // setPlaces(places)
    }

    const sortPlaces = (type) => {
      const sortedPlaces = [...places].sort((a,b)=>{
        if(a[type] > b[type]){
          return -1;
        } else {
          return 0;
        }
      })
      setPlaces(sortedPlaces)
    }
      
  return (
    <div className='locations'>
        <h1 class='center page-header'>List of Locations</h1>
        <div class="search">

        <button onClick={toggleThatButton}>
        {dahButton ? 'Hide Locations' : 'Show Locations'}
        </button>
        {dahButton ? (
          <button onClick={()=> sortPlaces("name")}>Sort by Name</button>):null}
        
        {dahButton ?(
          <button onClick={()=>sortPlaces("climate")}>Sort by Climate</button>):null}

        {dahButton ?(
          <button onClick={()=>sortPlaces("terrain")}>Sort by Terrain</button>):null} 

        </div>
    
        <ul style = {{display: dahButton? "flex":"none"}}>
          {places.map((place, index) => (
              <li key={index}>
                <ul className='details'>
                  <li><span>Name:</span><span>{place.name}</span></li>
                  <li><span>Climate:</span><span>{place.climate}</span></li>
                  <li><span>Terrain:</span><span>{place.terrain}</span></li>
                </ul>
              </li>
            
          ))}
        </ul> 
    </div>
  )
  }

export default Locations;