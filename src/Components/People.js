import React, { useState, useEffect } from "react";
// import "./People.css";

function People() {
  const [searchText, setSearchText] = useState("");
  const [people, setPeople] = useState([]);
  const [personInfo, setPersonInfo] = useState(null);
  const [personNotFound, setPersonNotFound] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const person = people.find(
      (person) => person.name.toLowerCase() === searchText.toLowerCase()
    );
    if (person) {
      setPersonInfo({
        name: person.name,
        age: person.age,
        hairColor: person.hair_color,
        eyeColor: person.eye_color,
      });
      setPersonNotFound(false);
    } else {
      setPersonInfo(null);
      setPersonNotFound(true);
    }
    setSearchText("");
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = () => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        console.log(data);
      })
      .catch((error) => console.log("Error fetching people:", error));
  };

  return (
    <div>
      <div className="people">
        <h1>
          Search for a Person
        </h1>
        <form onSubmit={handleSearch}>
          <input type="text" value={searchText} onChange={handleInputChange} />
          <button type="submit">SUBMIT</button>
        </form>
        {personNotFound && <p style={{paddingTop: 30}}>Not Found</p>}
        {personInfo && (
          <aside>
            <h1>Name: {personInfo.name}</h1>
            <p>
              <strong>Age:</strong> {personInfo.age}
            </p>
            <p>
              <strong>Hair Color:</strong> {personInfo.hairColor}
            </p>
            <p>
              <strong>Eye Color:</strong> {personInfo.eyeColor}
            </p>
          </aside>
        )}
      </div>
    </div>
  );
}

export default People;
