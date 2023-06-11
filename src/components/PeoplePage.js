import React, { useState } from 'react';
import './PeoplePage.css';

function PeoplePage() {
  const [search, setSearch] = useState('');
  const [person, setPerson] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`)
      .then((response) => response.json())
      .then((data) => {
        const person = data.find((p) => p.name.toLowerCase() === search.toLowerCase());
        if (person) {
          setPerson(person);
          setError('');
        } else {
          setError('Not Found');
          setPerson(null);
        }
      });
  
    setSearch('');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">SUBMIT</button>
      </form>
      {person && (
        <div className="person-details-box">
          <h2>Name: {person.name}</h2>
          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Eye Color:</strong> {person.eye_color}</p>
          <p><strong>Hair Color:</strong> {person.hair_color}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default PeoplePage;



