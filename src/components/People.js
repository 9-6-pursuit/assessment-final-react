import React from 'react'
import { useState, useEffect } from 'react'

function People() {

    const [peoples, setPeoples] = useState([])
    const [names, setNames] = useState("")
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

    let  handleTextChange = (event) =>{
        setNames(event.target.value)
    }

    let handleClick = (event) =>{
        event.preventDefault()
        const result = peoples.filter(people => people.name === names)
        if (result.length > 0) {
            setSelectedPeoples(result[0])
          } else {
            setSelectedPeoples(null)
          }
    }

    let handleFormSubmit = (event) =>{
        event.target.reset()
    }
  return (
    <div className='people'>
        <h1 class='center page-header'>Search for a Person</h1>
        <form onSubmit={handleFormSubmit}>
        <div class="search">
        <input type='text' id='search' onChange={handleTextChange} />
        <button type='submit' onClick={handleClick}>
          submit
        </button>
        </div>
        {selectedPeoples ? (
          <div className='people-details'>
            <h3 class='center'>Name: {selectedPeoples.name}</h3>
            <p class='center'><strong>Age:</strong> {selectedPeoples.age}</p>
            <p class='center'><strong>Gender:</strong> {selectedPeoples.gender}</p>
            <p class='center'><strong>Hair color:</strong> {selectedPeoples.hair_color}</p>
          </div>
        ): (
            <p class = 'center'>Not Found</p>
        )}
        
      </form>
    </div>
  )
}

export default People