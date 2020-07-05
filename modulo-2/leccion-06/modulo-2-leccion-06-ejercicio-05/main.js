"use strict";

const logInputs = document.querySelector(".js-input");

function logUserInput(event) {
  console.dir(event);
}

logInputs.addEventListener("keyup", logUserInput);

console.dir(logInputs);

//sale: nodename input, value " " y required false
