import React from 'react'
import { useState, useEffect } from 'react'

function People() {

    const [peoples, setPeoples] = useState([])
    const [selectedPeoples, setSelectedPeoples] = useState(null)
    
    useEffect(()=>{
        fetch(`https://resource-ghibli-api.onrender.com/people`)
        .then(response=>response.json())
        .then(peoples =>{
            setPeoples(peoples)
            console.log(peoples)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])







  return (
    <div>
        <h2>Search for a Person</h2>
    </div>
  )
}

export default People