"use strict";

const buttonClick = document.querySelector(".js-button");
let nameInput = document.querySelector(".js-input");

function printGreeting() {
  let name = nameInput.value;
  const print = document.querySelector(".js-print");
  print.innerHTML = `Hola ${name}`;
}

buttonClick.addEventListener("click", printGreeting);
