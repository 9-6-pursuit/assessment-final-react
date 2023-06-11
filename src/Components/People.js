import React, { useState } from "react";
import "./People.css";

const People = () => {
  // State to hold the search name, character details, and not found flag
  const [searchName, setSearchName] = useState("");
  const [character, setCharacter] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // Handle input change in the search field
  const handleInputChange = (event) => {
    setSearchName(event.target.value);
  };

  // Handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
  
    // Fetch character details based on the search name
    fetch(`https://resource-ghibli-api.onrender.com/people`)
      .then((response) => response.json())
      .then((data) => {
        const foundCharacter = data.find((character) =>
          character.name.toLowerCase().includes(searchName.toLowerCase())
        );
  
        if (foundCharacter) {
          // Character found
          setCharacter(foundCharacter);
          setNotFound(false);
        } else {
          // Character not found
          setCharacter(null);
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
        setCharacter(null);
        setNotFound(false);
      });
  
    // Clear the search input
    setSearchName("");
  };

  return (
    <div className="people">
      {/* Heading */}
      <h1 className="people-heading">Search for a Person</h1>

      {/* Form for searching a person */}
      <form onSubmit={handleSubmit} className="people-form">
        {/* Input field for entering the search name */}
        <input
          type="text"
          placeholder="Enter a person's name"
          value={searchName}
          onChange={handleInputChange}
          className="people-input"
        />

        {/* Submit button */}
        <button type="submit" className="people-button">
          Search
        </button>
      </form>

      {/* Display character details or not found message */}
      {character && !notFound ? (
        <div className="people-result">
          {/* Display character name */}
          <h2 className="people-result-heading">{character.name}</h2>

          {/* Display character age */}
          <p>Age: {character.age}</p>

          {/* Display character gender */}
          <p>Gender: {character.gender}</p>
        </div>
      ) : notFound ? (
        <p className="people-not-found">Not Found</p>
      ) : null}
    </div>
  );
};

export default People;
