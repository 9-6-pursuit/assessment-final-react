const URL = "https://resource-ghibli-api.onrender.com";


export function getAllMovies() {
    return fetch(`${URL}/films`)
    .then((response) => 
    response.json());
}

export function getPeople() {
    return fetch(`${URL}/people`)
    .then((response) => 
    response.json());
}

export function getLocations() {
    return fetch(`${URL}/locations`)
    .then((response) => 
    response.json());
}


/* ======== EXAMPLES =========

======== PEOPLE =====
[
{
"id": "030555b3-4c92-4fce-93fb-e70c3ae3df8b",
"name": "Yakul",
"age": "Unknown",
"gender": "male",
"eye_color": "Grey",
"hair_color": "Brown",
"films": [],
"species": "/species/6bc92fdd-b0f4-4286-ad71-1f99fb4a0d1e",
"url": "/people/030555b3-4c92-4fce-93fb-e70c3ae3df8b"
}
]


===== FILM =====
{
"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
"title": "Castle in the Sky",
"original_title": "天空の城ラピュタ",
"original_title_romanised": "Tenkū no shiro Rapyuta",
"description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
"director": "Hayao Miyazaki",
"producer": "Isao Takahata",
"release_date": "1986",
"running_time": "124",
"rt_score": "95",
"people": [],
"species": [],
"locations": [],
"vehicles": [],
"url": "/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
},

====== LOCATION ======
{
"id": "11014596-71b0-4b3e-b8c0-1c4b15f28b9a",
"name": "Irontown",
"climate": "Continental",
"terrain": "Mountain",
"surface_water": "40",
"residents": [],
"films": [],
"url": "/locations/11014596-71b0-4b3e-b8c0-1c4b15f28b9a"
},




*/