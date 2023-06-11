import { useEffect, useState } from "react";

export default function Movies () {

    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState() 
    const [date, setDate] = useState()
    const [description, setDescription] = useState("")
    
    
    useEffect(() => {
        fetch("https://resource-ghibli-api.onrender.com/films")
        .then((response) => response.json())
        .then(data => {
            setMovies(data) 
            console.log(data)
        })
        // console.log(setMovies)
        
    }, [])
    
    return ( 
        <>
        <h1> Select a Movie </h1> 
        <div className="movie-box">
            <select onChange={(e)=>setTitle(e.target.value)} 
             className="movie-select" id="movie-select">
                <option value="empty-option"> </option>
                {
                    movies.map((opts,i)=><option>{opts.title}</option>)
                }
            </select>
                <div className="description-box">
                    <h1>{title}</h1>
                    <h3> </h3>

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