import React, { useEffect, useState } from 'react'
import "./People.css"

function People() {

    const [people, setPeople] = useState([])
    const [select, setSelect] = useState({})
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const selected = people.find((person) => person.name.toLowerCase() === name.toLowerCase())
        setSelect(selected || {});
        setName("")
    }

    useEffect(() => {
        fetch("https://resource-ghibli-api-pursuit.onrender.com/people")
        .then((response) => response.json())
        .then ((response) =>{
            setPeople(response)
        })
    }, []);

  return (
    <div className='people'>
        <div className='upper-box'>
            <h1>Search for a Person</h1>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={e => setName(e.target.value)} value={name}></input>
                <button className='bttn' type='submit'>Submit</button>
            </form>

        </div>

        <div className='desc'>
            {select.id ?(
                <div className='desc1'>
                    <h2 className='personName'><span>Name:</span> {select.name}</h2>
                    <p><span>Age:</span>{select.age}</p>
                    <p><span>Eye Color:</span> {select.eye_color} </p>
                    <p><span>Hair Color:</span> {select.hair_color}</p>
                </div>)
            :<div>Not Found</div>}
        </div>
    </div>
  )
}

export default People