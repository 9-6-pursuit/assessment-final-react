import { read_people } from "../fetchApi";
import { useEffect, useState } from "react";
import Notfound from "./message/Notfound";
import "./People.css"

export default function People () {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    read_people().then(data => {
      setPeople(data);
    });
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    setSearchTerm("");
  };

  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 ? (
        searchResults.map((person, index) => (
          <aside key={index}>
            <h3 className="font-title"><span>Name:</span> {person.name}</h3>
            <p><span>Age:</span> {person.age}</p>
            <p><span>Eye Color:</span> {person.eye_color}</p>
            <p><span>Hair Color:</span> {person.hair_color}</p>
          </aside>
        ))
      ) : (
        <Notfound />
      )}
    </div>  
  );
}
