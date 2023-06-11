import { useState } from "react";
import "../CSS/Locations.css";

export default function Locations() {
    const [location, setLocation] = useState([]);
    const [locationVisibility, setLocationVisibility] = useState(false)

    const fetchLocations = () => {
        fetch("https://resource-ghibli-api.onrender.com/locations")
        .then(response => {
            return response.json();
        }).then(locationData => {
            setLocation(locationData)
        }).catch(err => {
            console.log(err);
        })
    }

    const toggleLocations = () => {
        setLocationVisibility(!locationVisibility);
    }
    
    const sortLocations = (filterMethod) => {
        const sortedLocations = [...location].sort((a,b) => {
            if (a[filterMethod] > b[filterMethod]) {
            return 1;
            } else if (a[filterMethod] < b[filterMethod]) {
                return -1;
            } else {
                return 0;
            }
        });
        setLocation(sortedLocations);
    }

        

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button className="first" type="button" onClick={() => {
                if(!locationVisibility) {
                    fetchLocations();
                }
                toggleLocations();
                }}> {locationVisibility ? "Hide Locations" : "Show Locations"}
            </button>
            <div className="location-lists button-container">
            {locationVisibility ? (
                    <button type="button" onClick={() => sortLocations("name")}>
                        Sort by Name
                    </button>
                    ) : null}
            {locationVisibility ? (
                    <button type="button" onClick={() => sortLocations("climate")}>
                        Sort by Climate
                    </button>
                    ) : null}
            {locationVisibility ? (
                    <button type="button" onClick={() => sortLocations("terrain")}>
                        Sort by Terrain
                    </button>
                    ) : null}
                  {location.map((location) => (
                      <ul key={location.id}>
                          <li>
                              <span>Name: </span>{location.name}
                          </li>
                          <li>
                              <span>Climate: </span> {location.climate}
                          </li>
                          <li>
                              <span>Terrain: </span> {location.terrain}
                          </li>
                      </ul>
                  ))}
            </div>
        </div>
    )
}