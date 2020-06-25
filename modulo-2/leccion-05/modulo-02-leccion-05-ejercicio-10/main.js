"use strict";

const inception = "<li>Inception</li>";
const theButterFlyEffect = "<li>The Butterfly Effect</li>";
const eternalSunshineOfTheSM = "<li>Eternal Sunshine of the Spotless Mind</li>";
const blueVelvet = " <li>Blue velvet</li>";
const split = "<li>Split</li>";

const buttonClick = document.querySelector(".js-button");

function printMovies() {
  const print = document.querySelector(".js-text");
  print.innerHTML = `${inception} ${theButterFlyEffect} ${eternalSunshineOfTheSM} ${blueVelvet} ${split}`;
}

buttonClick.addEventListener("click", printMovies);

const movieClick = document.querySelector("ul");

function printConsole() {
  console.log(inception);
}

movieClick.addEventListener("click", printConsole);
