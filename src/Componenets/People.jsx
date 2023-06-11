import { useState } from "react"

function People() {
    const [people, setPeople] = useState([])

    handleSubmit(event){
        event.preventDefault();
    }
  return (
    <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" id="person" name="person" onChange={handleValueChange}></input>
            <button>submit</button>
        </form>
        <div>
            <h1>Name: </h1>
            <p>Age: </p>
            <p>Gender: </p>
            <p>Eye Color: </p>
            <p>Hair Color: </p>
        </div>

    </div>
  )
}

export default People