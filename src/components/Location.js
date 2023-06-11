
import React from 'react'
import { useEffect } from 'react';
import { getLocations } from './Fetch.js/Fetch';

export default function Location({location}) {
    return (
    <ul className="details">
      <li>    
        <p><span>Name: </span>{location.name}</p>
        <p><span>Climate: </span> {location.climate}</p>
        <p><span>Terrain: </span>{location.terrain}</p>
      </li>
  
    </ul>);
  }
  

