import { useEffect, useState } from "react";

function Locations() {
    const [show, setShow] = useState(false);
    const [locations, setLocations] = useState([]);
    const [buttonText, setButtonText] = useState('Show Locations');

    useEffect(() => {
        fetch(`https://resource-ghibli-api.onrender.com/locations/`)
        .then(response => response.json())
        .then(data => {
            setLocations(data);
            // console.log(data)
            // console.log(locations)
        })
        .catch(error => console.error(error));
    }, []);

    const toggleShow = () => {
        setShow(!show);
        let text = show ? 'Show Locations' : 'Hide Locations';
        // console.log(show);
        setButtonText(text);
    }

    return (
        <div className="locations">
            <h2>List of Locations</h2>
            <button onClick={toggleShow} >{buttonText}</button>
            <button>Sort by Name</button>
            <button>Sort by Climate</button>
            <button>Sort by Terrain</button>
            {show &&
                <ul>
                    {locations.map(location =>
                        <li key={location.id}>
                            <ul>
                                <li><span>Name:</span>{location.name}</li>
                                <li><span>Climate:</span>{location.climate}</li>
                                <li><span>Terrain:</span>{location.terrain}</li>
                            </ul>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export default Locations;
