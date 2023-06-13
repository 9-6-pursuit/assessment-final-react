import React, { useEffect, useState } from 'react';
import "./CharacterList.css"

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch('https://resource-ghibli-api-pursuit.onrender.com/people')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    // Filter characters based on search query
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCharacters(filteredCharacters);
    setSearchQuery('');
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="people">
      <h1>Studio Ghibli Characters</h1>
      <h2>Search for a Person</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter character name"
        />
        <button type="submit">Search</button>
      </form>
      {filteredCharacters.length > 0 ? (
        <ul>
          {filteredCharacters.map((character) => (
            <li key={character.id}>
              <h2>{character.name}</h2>
              <p>{character.age}</p>
              <p>{character.gender}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{searchQuery.length > 0 ? 'Not Found' : ''}</p>
      )}
    </div>
  );
};

export default CharacterList;
