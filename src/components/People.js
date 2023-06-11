import React, { useEffect, useState } from 'react';

export default function People() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [foundPerson, setFoundPerson] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    fetch('https://resource-ghibli-api.onrender.com/people')
      .then(response => response.json())
      .then(data => setPeople(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const found = people.find(person =>
      person.name.toLowerCase() === searchTerm.toLowerCase()
    );

    setFoundPerson(found);
    setSearchTerm('');
    setSearchAttempted(true);
  };

  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter a name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {searchAttempted && !foundPerson && <p>Not Found</p>}

      {foundPerson && (
        <div>
          <h3>Name: {foundPerson.name}</h3>
          <p>Age: {foundPerson.age}</p>
          <p>Gender: {foundPerson.gender}</p>
          <p>Eye Color: {foundPerson.eye_color}</p>
          <p>Hair Color: {foundPerson.hair_color}</p>
        </div>
      )}
    </div>
  );
}
