import { useEffect, useState } from "react";

function People() {
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState(null)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/people`)
        .then(response => response.json())
        .then(people => {
            setPeople(people)
        })
        .catch(message => {
            console.error(message)
        })
    }, [])

    function handleSearchChange(event) {
        event.preventDefault()
        let typed = event.target.people.value;
        let selectedPerson = people.find(person => {
            let lower = person.name.toLowerCase()
            return lower === typed.toLowerCase()
        })
        setPerson(selectedPerson)
        setMessage("Not Found")
        event.target.people.value = ''
    }

    return (
        <div className="people text-center">
            <h3>Search for a person</h3>
            <form onSubmit={handleSearchChange} className="input-group mb-3">
                <input id="people"type="text" className="form-control" placeholder="Studio Ghibil Search" aria-label="Studio Ghibil Search" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
            </form>
            {person ? (
                <div>
                    <h1><strong>Name: </strong>{person.name}</h1>
                    <h3><strong>Age: </strong>{person.age}</h3>
                    <h3><strong>Eye Color: </strong>{person.eye_color}</h3>
                    <h3><strong>Hair Color: </strong>{person.hair_color}</h3>
                </div>
            ) : <h1>{message}</h1>}
        </div>
  )
  }
  
  export default People;
  