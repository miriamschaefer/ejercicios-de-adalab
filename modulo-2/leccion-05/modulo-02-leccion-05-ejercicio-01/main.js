"use strict";

const myText = document.querySelector(".js-button");

function changeText() {
  const print = document.querySelector(".js-text");
  print.innerHTML = "¡Ole tú!";
}

myText.addEventListener("click", changeText);
