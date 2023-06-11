
import { useEffect, useState } from "react";
export default function People() {
    const[people, setPeople] = useState([])
    const[search, setSearch] = useState(null)
    const [result, setResult] = useState([])

    useEffect(()=> {
        fetch('https://resource-ghibli-api.onrender.com/people')
        .then((response) => response.json())
        .then(data => {
            setPeople(data)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [])

    const handleInputChange = (event) => {
        setSearch(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const results = people.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
        setResult(result);
        setSearch("");
      };
    
      return (
        <div className="people">
          <h2>Search for a Person</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleInputChange} />
            <button type="submit">Search</button>
          </form>
          {result.length > 0 ? (
            setResult.map((person, index) => (
              <aside key={index}>
                <h3 className="font-title"><span>Name:</span> {person.name}</h3>
                <p><span>Age:</span> {person.age}</p>
                <p><span>Eye Color:</span> {person.eye_color}</p>
                <p><span>Hair Color:</span> {person.hair_color}</p>
              </aside>
            ))
          ) : (
            <div className="not-found"> 
            <p>Not found.</p>
            </div>
          )}
      </div>
    );
  }
  