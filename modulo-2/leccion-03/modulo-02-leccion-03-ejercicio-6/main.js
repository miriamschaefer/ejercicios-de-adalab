"use strict";

let avocados;
const avocadoPrice = 1.5;
const money = 1;

let purchase = money >= avocadoPrice ? money / avocadoPrice : avocados;

// por qué no me coge los paréntesis????

if (purchase === undefined) {
  console.log("Ni pa' un aguacate");
} else if (purchase === 1) {
  console.log(`${purchase} aguacate`);
} else {
  console.log(`${purchase} aguacates`);
}
