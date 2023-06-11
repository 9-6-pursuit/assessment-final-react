import {useState, useEffect} from "react";
import { getPeople } from "../fetch";

function People() {
    const [people, setPeople] = useState("");
    const [selectedPerson, setSelectedPerson] = useState("");
    const [loadingError, setLoadingError] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    useEffect(()=> {
        getPeople()
        .then((response) => {
            setPeople(response);
            setLoadingError(false);
        })
        .catch((error) => {
            console.error(error);
            setLoadingError(true);
        });
    }, []);

    function handleSubmit(event){
        event.preventDefault();
        const searchValue = event.target.parentElement.querySelector('.person-search').value;
        setSearchInput(searchValue);
        const selected = people.find((person) => 
        person.name.toLowerCase() === searchValue.toLowerCase());
        setSelectedPerson(selected || null);
    };

    return(
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="person-search"></input>
                <button className="person-search-button" type="submit">Search</button>
            </form>
        {selectedPerson && searchInput && (
            <div>
                {!selectedPerson ? (
                    <p>Not Found</p>
                ) : (
                    <div>
                        <h2>Name: {selectedPerson.name}</h2>
                        <p>
                        <span style={{fontWeight: 'bold'}}>Age:</span> {selectedPerson.age}
                        </p>
                        <p>
                        <span style={{fontWeight: 'bold'}}>Gender:</span> {selectedPerson.gender}
                        </p>
                        <p>
                        <span style={{fontWeight: 'bold'}}>Eye Color:</span> {selectedPerson.eye_color}
                        </p>
                        <p>
                        <span style={{fontWeight: 'bold'}}>Hair Color:</span> {selectedPerson.hair_color}
                        </p>
                    </div>
                )}
            </div>
        )}
        </div>
    )
}

export default People;