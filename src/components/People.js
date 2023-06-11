import { useEffect, useState } from "react";
import "./People.css"


function People() {
 const [searchTerm, setSearchTerm] = useState("");
 const [people, setPeople] =  useState([])

//  let handleSearch = () => {
//     fetch(`https://ghibliapi.herokuapp.com/people/{id}`).then(response => response.json())
//     .then(people => {
//         console.log(response)
//     })
//     .catch(message => {
//         console.error(message)
//     })
// }

useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/{id}`)
    .then(response => response.json())
    .then(people => {
        console.log(people)
        setPeople(people)
    })
    .catch(message => {
        console.error(message)
    })
}, [])

let handleSearch = (event) => {

    let setSearchTerm = people.find(people => {
        return  people.name.toLowerCase() === setSearchTerm.toLowerCase()
    })
    setSearchTerm(searchTerm)
}

    return (
        <div className="people">
            <h1 className="person">Select A Person</h1>
            <div className="search_bar">
            <input onChange={(event) => {setSearchTerm(event.target.value)}}></input>
            <button onClick={handleSearch} className="search">Search</button>
            </div>
 
            {searchTerm ? (
                <div className="people_details">
                    <h1>Name: {searchTerm.name}</h1>
                    <h1>Age: {searchTerm.age}</h1>
                    <h1> Eye Color: {searchTerm.eye_color}</h1>
                    <h1> Hair Color: {searchTerm.hair_color}</h1>
                </div>
            ) : null}

        </div>

    );
  }
  
  export default People;