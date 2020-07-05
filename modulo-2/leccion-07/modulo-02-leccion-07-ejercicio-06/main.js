'use strict';
const userMovies = document.querySelector('.js-user-movies');
const userClick = document.querySelector('.js-send');

let movies = [];

function pickUserMovies() {
  event.preventDefault();
  const printMessage = document.querySelector('.js-paragraph');
  const movies = userMovies.value.split(',');

  console.log(movies);

  for (const movie of movies) {
    printMessage.innerHTML = `A nosotras también nos encantó ${movies[0]}, tenemos mucho en común, humana.</br> A nosotras también nos encantó ${movies[1]}, tenemos mucho en común, humana.</br>`;
  }
}

userClick.addEventListener('click', pickUserMovies);
