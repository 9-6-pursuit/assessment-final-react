const URL_FILMS = "https://resource-ghibli-api-pursuit.onrender.com/films/";
const URL_PEOPLE = "https://resource-ghibli-api-pursuit.onrender.com/people/";
const URL_LOCATIONS = "https://resource-ghibli-api-pursuit.onrender.com/locations/";

function read_films(){
  return fetch(`${URL_FILMS}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function read_people(){
  return fetch(`${URL_PEOPLE}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}


function read_locations(){
  return fetch(`${URL_LOCATIONS}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}


// export {read_films}
export {read_films, read_people, read_locations}
