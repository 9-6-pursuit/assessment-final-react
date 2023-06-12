import { useEffect, useState } from "react";

function Locations() {
    const [show, setShow] = useState(false);
    const [locations, setLocations] = useState([]);
    const [buttonText, setButtonText] = useState('Show Locations');

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/locations/`)
        .then(response => response.json())
        .then(data => setLocations(data))
        .catch(error => console.error(error));
    }, []);

    const toggleShow = () => {
        setShow(!show);
        let text = show ? 'Show Locations' : 'Hide Locations';
        setButtonText(text);
    }

    const sortLocations = (key) => {
        let sorted = [...locations].sort((a, b) => a[key] > b[key] ? 1 : -1);
        setLocations(sorted)
    }

    return (
        <div className="locations">
            <h2>List of Locations</h2>
            <div className="buttons">
                <button className="btn" onClick={toggleShow} >{buttonText}</button>
                <button className={show ? "btn" : "hide-btn"} onClick={() => sortLocations("name")}>Sort by Name</button>
                <button className={show ? "btn" : "hide-btn"} onClick={() => sortLocations("climate")}>Sort by Climate</button>
                <button className={show ? "btn" : "hide-btn"} onClick={() => sortLocations("terrain")}>Sort by Terrain</button>
            </div>
            {show &&
                <ul>
                    {locations.map(location =>
                        <li key={location.id}>
                            <ul>
                                <li><span>Name: </span>{location.name}</li>
                                <li><span>Climate: </span>{location.climate}</li>
                                <li><span>Terrain: </span>{location.terrain}</li>
                            </ul>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export default Locations;
