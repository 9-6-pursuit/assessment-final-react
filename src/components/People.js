import { useEffect, useState } from "react";

function People() {
  const [people, setPeople] = useState([]);
  const [searchPerson, setSearchPerson] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetch(`https://resource-ghibli-api.onrender.com/people`)
      .then((response) => response.json())
      .then((people) => {
        setPeople(people);
      })
      .catch((message) => {
        console.error(message);
      });
  }, []);


  function handleSearchChange(event) {
    event.preventDefault();

    let typed = event.target.searchPerson.value;
    if (typed === "") {
      console.log("error");
    } else {
      const foundPerson = people.find(
        (person) => 
            person.name.toLowerCase() === typed.toLowerCase()
      );
      setSelectedPerson(foundPerson);
      setSearchPerson("");
    }
  }

  return (
    <div className="people">
      <h3>Studio Ghibli People</h3>
      <form onSubmit={handleSearchChange}>
        <label htmlFor="searchPerson">
          <input type="text" id="searchPerson" placeholder="Search..." value={searchPerson} onChange={(e) => setSearchPerson(e.target.value)} />
        </label>
        <button type="submit" value="Submit" className="button1" >Submit</button>
      </form>

      {selectedPerson ? (
        <div>
          <h4>Name: {selectedPerson.name}</h4>
          <p>Age: {selectedPerson.age}</p>
          <p>Eye Color: {selectedPerson.eye_color}</p>
          <p>Hair Color: {selectedPerson.hair_color}</p>
        </div>
      ) : (
        <p>No person found.</p>
      )}
    </div>
  );
}
      
      

export default People;
