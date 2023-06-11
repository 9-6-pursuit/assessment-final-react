import React from 'react'
import { getPeople } from './Fetch.js/Fetch'
import { useEffect } from 'react'

function Person({person}) {


  return (
    <div><aside>
    <h3><span>Name: </span>{person.name}</h3>
    <p><span>Age: </span>{person.age}</p>
    <p><span>Gender: </span>{person.gender}</p>
    <p><span>Eye Color: </span>{person.eye_color}</p>
    <p><span>Hair Color: </span>{person.hair_color}</p>
  </aside></div>
  )
}

export default Person