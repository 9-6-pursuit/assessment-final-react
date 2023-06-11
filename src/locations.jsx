import { useEffect } from "react";
import { useState } from "react";
import LocationCard from "./LocationCard";

export default function Locations() {
    const [clicked, setClicked] = useState(false)
    const [locations, setLocations] = useState([])
    
    function handleClick() {
        setClicked(!clicked)
    }
    
    function getLocations() {
        return fetch("https://resource-ghibli-api.onrender.com/locations").then(response => response.json())
    }

    function handleSortByName() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.name > locationB.name) return 1
            if (locationA.name < locationB.name) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    function handleSortByClimate() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.climate > locationB.climate) return 1
            if (locationA.climate < locationB.climate) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    function handleSortByTerrain() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.terrain > locationB.terrain) return 1
            if (locationA.terrain < locationB.terrain) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    useEffect(() => {
        getLocations().then(response => {
            setLocations(response)
        })
    }, [])

    return (
        <section className='locations'>
            <h1>List of Locations</h1>
            <button onClick={handleClick}>{clicked ? "Hide Locations" : "Show Locations"}</button>
            <button onClick={handleSortByName}>Sort by Name</button>
            <button onClick={handleSortByClimate}>Sort by Climate</button>
            <button onClick={handleSortByTerrain}>Sort by Terrain</button>
            <ul className="details">
                {clicked ? locations.map((location, i) => {
                    return (
                        <li key={location.id}><LocationCard location={location} /></li>
                )}) : null }
            </ul>
        </section>
    )
}