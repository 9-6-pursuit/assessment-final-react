import { useState } from "react";

export default function People() {
    const [name, setName] = useState("");
    const [personData, setPersonData] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://resource-ghibli-api.onrender.com/people?name=${name}`)
        .then((response) => response.json())
        .then((data) => {
            setPersonData(data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="people">
        <h1>Search for a person</h1>
        <form onSubmit={handleSubmit}>
            <label>
            <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
        {personData && personData.length > 0 ? (
            personData.map((person) => (
            <div key={person.id}>
                <p>Name: {person.name}</p>
                <p>Age: {person.age}</p>
                <p>Eye Color: {person.eye_color}</p>
                <p>Hair Color: {person.hair_color}</p>
            </div>
            ))
        ) : (
            <p>No person found</p>
        )}
        </div>
    );
}