"use strict";

const container = document.querySelector(".container");

if (container.classList.contains(".warning")) {
  const warning = document.querySelector("h1");
  warning.innerHTML = "AVISO";
  const warningP = document.querySelector("p");
  warningP.innerHTML = "Tenga cuidado.";
} else if (container.classList.contains(".error")) {
  const error = document.querySelector("h1");
  error.innerHTML = "ERROR";
  const errorP = document.querySelector("p");
  errorP.innerHTML = "Ha surgido un error.";
} else if (container.classList.contains(".success")) {
  const success = document.querySelector("h1");
  success.innerHTML = "CORRECTO";
  const successP = document.querySelector("p");
  successP.innerHTML = "Los datos son correctos.";
}
