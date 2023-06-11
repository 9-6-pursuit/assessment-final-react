import { useState,useEffect } from "react";



function Location() {
    const [place, setPlace] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/locations`)
            .then(response => response.json())
            .then((data) => {
                //console.log(data)
                setPlace(data)
            })
            .catch((error) => console.error(error))
    }, [])

    function handleOnClick() {
        setShow(!show)
    }


    function handleBtn() {
        let sortedPlace = [...place].sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      
        setPlace(sortedPlace);
      }
    function handleBtn1() {
        let sortedPlace = [...place].sort((a, b) => {
          if (a.climate < b.climate) {
            return -1;
          }
          if (a.climate > b.climate) {
            return 1;
          }
          return 0;
        });
      
        setPlace(sortedPlace);
      }
    function handleBtn2() {
        let sortedPlace = [...place].sort((a, b) => {
          if (a.terrain < b.terrain) {
            return -1;
          }
          if (a.terrain > b.terrain) {
            return 1;
          }
          return 0;
        });
      
        setPlace(sortedPlace);
      }

    

    return (
        <div className="locations">
            <h2>List of Locations</h2>
            <button onClick={handleOnClick}>
                {show ? "HIDE BUTTON" 
                : "SHOW BUTTON"}
            </button>  
            <button onClick={handleBtn}>SORT BY NAME</button>
            <button onClick={handleBtn1}>SORT BY CLIMATE</button>
            <button onClick={handleBtn2}>SORT BY TERRAIN</button>
            {show && place.map(el => 
                (<ul key={el.id}>
                    <li>
                        <ul>
                            <li>Name: {el.name}</li>
                            <li>Climate: {el.climate}</li>
                            <li>Terrain: {el.terrain}</li>
                        </ul>
                    </li>
                    
                </ul>)
            )}
        </div>
    )
}

export default Location;