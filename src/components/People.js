import React from 'react'
import { useEffect, useState } from 'react';

function People() {
    const [people, setPeople] = useState([]);
    const [inputName, setInputName] = useState();

    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`)
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            setPeople(response);
        })
          .catch((error) => {
            console.error(error);
           });
      }, []);

      const handleTextChange = (event)=> {
        // let txtValue = event.target.value
        // console.log(txtValue)
      }

      const handleSubmit = (event)=> {
        event.preventDefault();
        let txtValue = event.target.text.value
        setInputName(txtValue)
      }
  return (
    <div>
        <div className='people'>
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' id='text' onChange={handleTextChange}/>
                <button className='btn btn-dark'>SUBMIT</button>
            </form>
            {
                people.map((people) => {
                    // let listedPerson = people.name.toLowerCase();
                    if(inputName.toLowerCase() == people.name.toLowerCase()) {
                        return (
                            <div>
                                <h2>Name: {people.name}</h2>
                                <p><span>Age:</span>{people.age}</p>
                                <p><span>Eye Color:</span>{people.eye_color}</p>
                                <p><span>Hair Color:</span>{people.hair_color}</p>
                            </div>
                        ) 
                    } 
                }) 
            }
        </div>
    </div>
  )
}

export default People