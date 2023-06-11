//GET ALL FILMS

export function getAllFilms() {
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`).then((response) => response.json())
}

//GET ALL PEOPLE

export function getAllPeople() {
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`).then((response) => response.json());
}

//GET ALL LOCATIONS

export function getAllLocations() {
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`).then((response) => response.json());
}