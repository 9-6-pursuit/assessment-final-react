function Locations ({locations, showLocations, sortBy, toggleShowLocation}) {
    return (
        <div className="locations">
            <h2>List of Locations</h2>
            {showLocations ?
            <div>
                <button onClick={toggleShowLocation}>Hide Locations</button>
                <button onClick={() => sortBy("name")}>Sort by Name</button>
                <button onClick={() => sortBy("climate")}>Sort by Climate</button>
                <button onClick={() => sortBy("terrain")}>Sort by Terrain</button>
                </div>
                : <button onClick={toggleShowLocation}>Show Locations</button>}
                {locations && showLocations ?
                <ul>
                    {locations.map((location, index) => {
                        return (
                                <ul key={index}>
                                    <li><span>Name: </span><span>{location.name}</span></li>
                                    <li><span>Climate: </span><span>{location.climate}</span></li>
                                    <li><span>Terrain: </span><span>{location.terrain}</span></li> 
                                </ul>

                        )})}
                </ul>
                :null}
        </div>
    )
}
export default Locations;