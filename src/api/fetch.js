const baseURL = "https://resource-ghibli-api.onrender.com";

export function getMovies () {
    return (
        fetch (`${baseURL}/films`).then((response) => response.json())
        )
}

export function getPeople () {
    return (
        fetch (`${baseURL}/people`).then((response) => response.json())
    )
}

export function getLocation () {
    return (
        fetch (`${baseURL}/locations`).then((response) => response.json())
    )
}