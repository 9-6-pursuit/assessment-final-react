import "./People.css"
import { useEffect, useState } from "react";


function People() {

    const[people,setPeople] =useState([])
    
    const[selected,setSelected] =useState(null)

    const[input,setInput] =useState('')


    useEffect(()=>{
        fetch('https://resource-ghibli-api-pursuit.onrender.com/people')
        .then(response => response.json())
        .then(people => {
            console.log(people)
            setPeople(people)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    let handleOnSubmit = (event) => {
        event.preventDefault()
        let name = input
        let selectedPerson = people.find(person => {
            return person.name.toUpperCase() === name.toUpperCase()
        })
        setSelected(selectedPerson)
        console.log(selectedPerson)
        setInput('')
    }


    return (
      <div className="movies">
        <h3>Search for a Person</h3>
        <div>
            <form onSubmit={handleOnSubmit}>
                <input name={'search'} placeholder="Search..." onChange={e => setInput(e.target.value)} value={input}></input>
                <button>Submit</button>
            </form>
        </div>
        <br></br>
        {selected ? (
            <div className="result">
                <h1>Name: {selected.name}</h1>
                <h3>Age: {selected.age}</h3>
                <h3>Eye Color: {selected.eye_color}</h3>
                <h3>Hair Color: {selected.hair_color}</h3>
            </div>
        ) : null}
        {/* (<div>NOT FOUND</div>)  */}
      </div>
    );
  }
  
// https://resource-ghibli-api-pursuit.onrender.com/locations
  export default People;