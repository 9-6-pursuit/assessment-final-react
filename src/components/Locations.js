import React from 'react'
import { useEffect, useState } from 'react';

function Locations() {
    const [locations, setLocations] = useState([]);
    const [list, setList] = useState();

    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/locations`)
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            setLocations(response);
        })
          .catch((error) => {
            console.error(error);
           });
      }, []);

      const handleClick = (event) => {
         event.preventDefault();
         console.log('click')
        let listOfLocations = locations.map((location) => {
            return (
                <div className='card'>
                    <p><span>Name:</span>{location.name}</p>
                    <p><span>Climate:</span>{location.climate}</p>
                    <p><span>Terrain:</span>{location.terrain}</p>
                </div>
            )
        })
        setList(listOfLocations)
      }
  return (
    <div>
        <div className='locations'>
            <h1>List of Locations</h1>
            <button className='btn btn-light' onClick={handleClick}>SHOW LOCATIONS</button>
            {list}
        </div>
    </div>
  )
}

export default Locations