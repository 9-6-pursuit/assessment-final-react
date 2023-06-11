import "./Locations.css"
import Location from './Location';
import { useEffect, useState } from "react";


function Locations() {

    const[locations,setLocations] =useState([])
    
    const[selected,setSelected] =useState(null)

    const[input,setInput] =useState('')

    const[show,setShow] = useState(false)


    useEffect(()=>{
        fetch('https://resource-ghibli-api-pursuit.onrender.com/locations')
        .then(response => response.json())
        .then(locations => {
            console.log(locations)
            setLocations(locations)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    // let handleOnSubmit = (event) => {
    //     event.preventDefault()
    //     let name = input
    //     let selectedLocation = locations.find(location => {
    //         return location.name.toUpperCase() === name.toUpperCase()
    //     })
    //     setSelected(selectedLocation)
    //     console.log(selectedLocation)
    //     setInput('')
    // }

    function showLocations(){
        setShow(!show)
    }


    return (
      <div className="locations">
        <h3>List of Locations</h3>
        <div>
            <button onClick={showLocations}>SHOW LOCATIONS</button> <button onClick={showLocations}>SORT BY NAME</button>
        </div>
        <br></br>
        <div className="location-list">
        { show ? (
            <div>
                {locations.map((location) => {
                    return (
                        <Location location={location}/>
                    )
                })}
            </div>) : null}
        </div>
        {/* {selected ? (
            <div className="result">
                <h1>Name: {selected.name}</h1>
                <h3>Age: {selected.age}</h3>
                <h3>Eye Color: {selected.eye_color}</h3>
                <h3>Hair Color: {selected.hair_color}</h3>
            </div>
        ) : null} */}
        {/* (<div>NOT FOUND</div>)  */}
      </div>
    );
  }
  
// https://resource-ghibli-api-pursuit.onrender.com/locations
  export default Locations;