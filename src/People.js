import { useState } from "react";

const People = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [character, setCharacter] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://resource-ghibli-api.onrender.com/people?name=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCharacter(data[0]);
        } else {
          setCharacter(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
      });
    setSearchTerm("");
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter a name"
        />
        <button type="submit">Submit</button>
      </form>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <p>Age: {character.age}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Hair Color: {character.hair_color}</p>
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default People;
