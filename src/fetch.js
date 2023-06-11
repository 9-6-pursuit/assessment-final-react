const URL = "https://resource-ghibli-api.onrender.com";


export function getAllMovies() {
    return fetch(`${URL}/films`)
    .then((response) => 
    response.json());
}