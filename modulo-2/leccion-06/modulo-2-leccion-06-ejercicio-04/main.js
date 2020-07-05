"use strict";

const logButtonClick = document.querySelector(".js-button");

function logClickOnConsole(event) {
  console.log(event);
}

logButtonClick.addEventListener("click", logClickOnConsole);
