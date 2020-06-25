"use strict";

let name = "Ana";

if (name === "Miriam") {
  const print = document.querySelector(".control");
  print.innerHTML = "Bienvenida, Miriam";
} else {
  const print = document.querySelector(".control");
  print.innerHTML = "Lo siento, pero el usuario no está registrado.";
}
