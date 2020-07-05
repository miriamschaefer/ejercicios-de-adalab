'use strict';

function workWithMovies() {
  let movies = [
    'Eternal Sunshine of the Spotless Mind',
    'The Lobster',
    'Pulp Fiction',
  ];

  movies[3] = 'Canino';

  return console.log(movies);
}

console.log(workWithMovies());
