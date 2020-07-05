"use strict";

// const adalaber1 = {
//   name: "Susana",
//   age: 34,
//   job: "periodista",
// };

// console.log(adalaber1.age);

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.job = "periodista";

adalaber1.run = "Estoy corriendo";
adalaber1.runAMarathon = (distance) => ` un maratón de ${distance} km.`;
adalaber1.showBio = function () {
  return `Hola, me llamo ${this.name}, tengo ${this.age} años y soy ${this.job}`;
};

console.log(adalaber1.showBio());

console.log(adalaber1.run + adalaber1.runAMarathon(100));

// const adalaber2 = {
//   name: "Rocío",
//   age: 25,
//   job: "actriz",
// };

const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "periodista";
adalaber2.showBio = function () {
  return `Hola, me llamo ${this.name}, tengo ${this.age} años y soy ${this.job}`;
};

console.log(adalaber2.showBio());

const printPhrase = document.querySelector(".js-text");

printPhrase.innerHTML = `Hola soy ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

printPhrase.innerHTML =
  printPhrase.innerHTML +
  `<br> Hola soy ${adalaber2.name} tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

// EJERCICIO 3
