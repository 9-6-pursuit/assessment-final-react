import { useEffect, useState } from "react";

export default function Movies () {

    const [movies, setMovies] = useState([])
    const [option, setOption] = useState({}) 
    //simplified this section after review. previous states were unnecessary.
    
    
    useEffect(() => {
        fetch("https://resource-ghibli-api.onrender.com/films")
        .then((response) => response.json())
        .then(data => {
            setMovies(data) 
            console.log(data)
        })
        // console.log(setMovies)
        
    }, [])
    
    function handleOnChange(event) {
        const id = event.target.value
        const movie = movies.find(movie => movie.title === id) || {};
        setOption(movie);
        console.log(movie)
    }

    return ( 
        <>
        <div className="movies">   
        <div className="movie-box">
        <h1> Select a Movie </h1> 
            <select onChange={handleOnChange} 
             className="movie-select" id="movie-select">
                <option> </option>
                {
                    movies.map((opts,i)=><option key={i}>{opts.title}</option>)
                }
            </select>
                
                    {option.id ? (
                        <aside>
                            <h7>
                                <span> Title: </span>
                                {option.title}
                            </h7>
                            <p>
                                <span> <strong> Release Date:  </strong></span>
                                {option.release_date}
                            </p>
                            <p>
                                <span> <strong> Description: </strong></span>
                                {option.description}
                            </p>
                        </aside>
                    ) : null }

                </div>
                </div>
        </>
    )
}
// const fetchMovies = () => {
//     fetch("https://resource-ghibli-api.onrender.com/films")
    
//     .then((response) => response.json())
//     .then(data => {
//         setMovies(data)
//         console.log("working now!")
//         console.log(movies)
    
//     })
//     .catch(error => 
//         console.log(error))
// }