import { useEffect, useState } from "react";
import "./Location.css"

function Location() {
    const [location, setLocation] = useState([])
    const [showMore, setShowMore] = useState(false);
    // const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/locations`)
        .then(response => response.json())
        .then(location => {
            setLocation(location)
        })
        .catch(message => {
            console.error(message)
        })
    }, [])

    const toggleShowMore = () => {
        setShowMore(!showMore)
      }


      function sortName() {
        
    }

       function sortClimate() {
       
     
    }

       function sortTerrain() {
        
       }


    return (
        <div className="location">
         <h1> List Of Locations </h1>

         {showMore ? (
               <div>
                    <button onClick={toggleShowMore}> Hide Locatiions </button>
                    <button onClick={sortName}> Sort by Name</button>
                    <button onClick={sortClimate}> Sort by Climate</button>
                    <button onClick={sortTerrain}> Sort by Terrain</button>
                </div>  ):(
                       <button onClick={toggleShowMore} >Show Locations</button>
            )}


       
      <div className="details"> 
         {location.map((location) => {
                    return (
               <div>

         {showMore ? (
               <div className="card">
                       <ul >
                        <ul>Name: {location.name}</ul>
                        <ul>Climate: {location.climate}</ul>
                        <ul>Terrain: {location.terrain}</ul>
                        </ul>
                </div>  ):(
            <a > </a> )}
                    </div>
                    )//end of return
                })} 
           
               
            </div>
        </div>
    );
  }

  export default Location;