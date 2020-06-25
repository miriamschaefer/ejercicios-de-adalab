"use strict";

const key = document.querySelector("body");

function changeBackground() {
  if (event.key === "r") {
    key.classList.add("color-r");
    key.classList.remove("color-m");
  } else if (event.key === "m") {
    key.classList.add("color-m");
    key.classList.remove("color-r");
  }
}

key.addEventListener("keydown", changeBackground);
