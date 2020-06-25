"use strict";

let num = 8;

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}

const result = oddOrEven(num);

console.log(result);
