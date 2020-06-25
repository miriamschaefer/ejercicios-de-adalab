"use strict";

function getEl(selector) {
  return document.querySelector(selector);
}

const result = parseInt(getEl(".text").innerHTML);
console.log(result);

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}

const resultFunction2 = oddOrEven(result);

console.log(resultFunction2);
