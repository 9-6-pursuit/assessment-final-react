import { useEffect, useState } from "react";

function People() {
    const [search, setSearch] = useState("");
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState(null);
    const [showPerson, setShowPerson] = useState(false);

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/people/`)
        .then(response => response.json())
        .then(data => {
            setPeople(data);
            console.log(people)
        })
        .catch(error => console.error(error));
    }, []);

    const handleChange = event => {
        setSearch(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        let findPerson = people.find(elem => elem.name.toLowerCase() === search.toLowerCase());
        setPerson(findPerson);
        setShowPerson(true);
        setSearch("");
        // console.log(findPerson)
        // console.log(person)
    }

    return (
        <div className="people">
            <h2>Search for a Person</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={search} required/>
                <button>Submit</button>
            </form>
            {person && showPerson ?
                <aside>
                    <h2><span>Name:</span> {person.name}</h2>
                    <p><span>Age:</span> {person.age}</p>
                    <p><span>Eye Color:</span> {person.eye_color}</p>
                    <p><span>Hair Color:</span> {person.hair_color}</p>
                </aside>
                : showPerson ? <p>Not Found</p>
                : <></>
            }
        </div>
    );
}

export default People;
