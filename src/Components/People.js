import { useState, useEffect } from "react";
import "../CSS/People.css"

export default function People() {
    const [people, setPeople] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [initialSearch, setInitialSearch] = useState(false); //this will help me display the "No Results Found" message after the inital search and there are no matching results;


   useEffect(()=> {
    fetch("https://resource-ghibli-api.onrender.com/people")
    .then(response => {
        return response.json();
    }).then(peopleData => {
        setPeople(peopleData);
    }).catch(err => {
        console.log(err);
    })
   }, []);

    const handleSubmit = (event)=> {
        event.preventDefault();
        const search = textInput.toLowerCase();

        const searchResult = people.filter((person) => person.name.toLowerCase().includes(search)
        );
        setFilteredPeople(searchResult);
        console.log(filteredPeople);
        setInitialSearch(true)
        resetForm();
    }

    const handleChange = (event) => {
        setTextInput(event.target.value);
    }

    const resetForm = () => {
        setTextInput('');
    }
   
    return (
        <div className="people">
            <h1>Search for a Person</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={textInput} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <aside>
                {initialSearch && filteredPeople.length === 0 ? ( 
                <p>No results found.</p>
                ) : (
                    <div className="filtered-people">
                        {filteredPeople.map(person => (
                            //key has to be wrapped in a div element or ul
                            <div key={person.id}> 
                                <h3><span>Name: </span> {person.name}</h3>
                                <p><span>Age: </span>{person.age}</p>
                                <p><span>Eye Color: </span>{person.eye_color}</p>
                                <p><span>Hair Color: </span>{person.hair_color}</p>
                            </div>
                    ))}
                    </div>
                )}
            </aside>
        </div>
    )
}