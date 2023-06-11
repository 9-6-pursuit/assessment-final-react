import { useState } from "react"

function Location() {
    const [location, setLocations] = useState([])
 


  return (
    <div className="locations">
        <h1>List of Locations</h1>
        <button>Show Locations</button>
    </div>
  )
}

export default Location