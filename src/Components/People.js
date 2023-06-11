import { useState, useEffect } from "react";

export default function People() {
    const [people, setPeople] = useState([]);
    const [textInput, setTextInput] = useState("")


    let fetchMovies = fetch("https://resource-ghibli-api.onrender.com/people");

    fetchMovies.then(response => {
        return response.json();
    }).then(peopleData => {
        setPeople(peopleData);
    }).catch(err => {
        console.log(err);
    })

    const handleSubmit = (event)=> {
        event.preventDefault();
        let search = textInput.toLowerCase();
        let filteredPeople = people.filter((person) => person.name.toLowerCase().includes(search));
        setPeople(filteredPeople);
        console.log(people);
    }

    const handleChange = (event) => {
        setTextInput(event.target.value);
    }
   
    return (
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={textInput} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <div className="filtered-people">
                {people.length > 0 ? (
                    <ul>
                        {people.map(person => (
                            <li key={person.id}><span>Name: </span> {person.name}
                                <ul>
                                    <li>
                                        <span>Age: </span>{person.age}
                                    </li>
                                    <li>
                                        <span>Eye Color: </span>{person.eye_color}
                                    </li>
                                    <li>
                                        <span>Hair Color: </span>{person.hair_color}
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    )
}