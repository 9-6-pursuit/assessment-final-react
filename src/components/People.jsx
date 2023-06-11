import { useState, useEffect } from "react"




function People() {
     const [people, setPeople] = useState([])
     const [search, setSearch] = useState("")
     const [searchedPeople, setSearchedPeole] = useState(null)


    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`)
            .then(response => response.json())
            .then((data) => {
                //console.log(data)
                setPeople(data)
            })
            .catch((error) => console.error(error))
    }, [])


    function handleOnChange(event) {
        let querry = event.target.value;
        setSearch(querry)
    }

    function handleSubmit(event) {
      //event.preventDefault()  
      let selected = people.find(person => {
          if (person.name.toLowerCase().includes(search.toLowerCase())){
              return person
            } 
        })
        setSearchedPeole(selected)
        setSearch("")
    }


    return (
      <div className="people" >
        <h3>Search for a Person</h3>
        {/* <form action="submit" onSubmit={handleSubmit}> */}
        <input type="text" onChange={handleOnChange}/>
        <button type="submit" onClick={handleSubmit}>SUBMIT</button>
        {/* </form> */}
        {searchedPeople ? (
            <aside>
                <p><span>Name:</span> {searchedPeople.name}</p>
                <p> <span>Age:</span>  {searchedPeople.age}</p>
                <p><span>Eye Color:</span> {searchedPeople.eye_color}</p>
                <p><span>Hair Color:</span> {searchedPeople.hair_color}</p>
            </aside>
        ) : null}
      </div>
    );
  }
  
  export default People;
  