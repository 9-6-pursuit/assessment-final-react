import axios from 'axios';
import React from 'react';

const BASE_URL = "https://resource-ghibli-api.onrender.com"

export async function getMovies() {
  return await fetch (`${BASE_URL}/films`)
  .then((res) => res.json())
  .catch((e) => console.log(e))
}

export async function getPeople() {
    return await fetch (`${BASE_URL}/people`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
  }

  export async function getLocations() {
    return await fetch (`${BASE_URL}/locations`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
  }