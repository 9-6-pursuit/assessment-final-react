import "./People.css"
import {useEffect, useState} from "react";

function People() {
const [people, setPeople] = useState("")
const [selected, setSelected] = useState(null) 


useEffect(() => {
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`)
    .then((response) => response.json())
    .then (people => {
    console.log(people)
    setPeople(people)
    })
})


function handleNameChange(event) {
    let name = event.target.value;
    let selectedName = people.find (person => {
        return person.name === name
    })
    setSelected(selectedName)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
  }
 



    return (
      <div className="people">
         <h1>Search For A Person</h1>
        
         <input type="text" onChange={handleNameChange} />
         <button type="submit"  onClick={handleSubmit}>Submit</button>
       
         {selected ? (
            <div>
                <h2>Name: {selected.name}</h2>
                <h3>Age: {selected.age}</h3>
                <h3>Eye Color: {selected.eye_color}</h3>
                <h3>Hair Color: {selected.hair_color}</h3>
            </div>
         ) : null}
      </div>
    );
  }
  
  export default People;