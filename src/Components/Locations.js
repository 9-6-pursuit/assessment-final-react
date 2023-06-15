import { useEffect, useState } from "react";
import "./locations.css"
function Locations() {
    const [locations, setLocations] = useState([])
    const [shown, setShown] = useState(false)

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/locations`)
        .then(response => response.json())
        .then(locations => {
            setLocations(locations)
        })
        .catch(message => {
            console.error(message)
        })
    }, [])

    function handleLocations() {
        if(shown === false ){
            setShown(true)
        } else {
            setShown(false)
        }
    }
    function sortClimate(){
        let sorted = [...locations].sort((a, b) => {
            let fa = a.climate.toLowerCase(),
            fb = b.climate.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
        })
        setLocations(sorted)
        console.log(locations)
    }
    function sortTerrain(){
        let sorted = [...locations].sort((a, b) => {
            let fa = a.terrain.toLowerCase(),
            fb = b.terrain.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
        })
        setLocations(sorted)
        console.log(locations)
    }
    return (
        <div className="locations text-center">
            <h1>List of Locations</h1>
            <button onClick={handleLocations} type="submit" className="btn btn-primary btn-lg search">{shown ? "Hide Locations" : "Show Locations"}</button>
            {shown ? <button onClick={sortClimate} type="submit" className="btn btn-primary btn-lg search"> Sort by Climate</button> : null}
            {shown ? <button onClick={sortTerrain} type="submit" className="btn btn-primary btn-lg search"> Sort by Terrain</button> : null}
            <div className="container">
                <div className="row justify-content-md-center">
                    {shown ? locations.map(location => {
                        return (
                            <div key={location.id}className="col-3 card"> 
                                <p className="lineItem"><strong>Name: </strong>{location.name}</p>
                                <p className="lineItem"><strong>Climate: </strong>{location.climate}</p>
                                <p className="lineItem"><strong>Terrain: </strong>{location.terrain}</p>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </div>
  )
  }
  
  export default Locations;
  