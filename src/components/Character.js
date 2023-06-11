import { useEffect, useState } from "react";

function Character() {
  const [character, setCharacter] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((character) => {
        setCharacter(character);
      })
      .catch((message) => {
        console.error(message);
      });
  }, []);


  function handleSearchChange(event) {
    event.preventDefault();

    let typed = event.target.searchedCharacter.value;
    if (typed === "") {
      console.log("error");
    } else {
      const foundCharacter = character.find(
        (character) => 
            character.name.toLowerCase() === typed.toLowerCase()
      );
      setSelectedCharacter(foundCharacter);
      setSearchedCharacter("");
    }
  }

  return (
    <div className="people">
      <h1>Studio Ghibli Character</h1>
      <form onSubmit={handleSearchChange}>
        <label htmlFor="searchedCharacter">
          <input type="text" id="searchedCharacter" placeholder="Search..." value={searchedCharacter} onChange={(e) => setSearchedCharacter(e.target.value)} />
        </label>
        <button value="Submit"/>
      </form>

      {selectedCharacter ? (
        <div>
          <h4>Name: {selectedCharacter.name}</h4>
          <p>Age: {selectedCharacter.age}</p>
          <p>Eye Color: {selectedCharacter.eye_color}</p>
          <p>Hair Color: {selectedCharacter.hair_color}</p>
        </div>
      ) : (
        <p>No Character found.</p>
      )}
    </div>
  );
}



export default Character;