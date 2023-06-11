import Locations from "./Locations";

function Location({location}){
    return (
    <ul>
        <li>Name: {location.name}</li>
        <li>Climate: {location.climate}</li>
        <li>Terrain: {location.terrain}</li>
    </ul>
)}


export default Location;