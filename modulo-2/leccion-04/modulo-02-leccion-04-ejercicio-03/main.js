"use strict";

let price = 20;

function realPrice(price) {
  return `Precio sin IVA:  ${price * 0.79} , IVA: ${
    price * 0.21
  } , precio total: ${price * 0.79 + price * 0.21}`;
}

let result = realPrice(price);

console.log(result);

// función flecha

// let price = 20;

// let result = realPrice => {
//   return `Precio sin IVA:  ${price * 0.79} , IVA: ${
//   price * 0.21} , precio total: ${price * 0.79 + price * 0.21}`;
//   console.log(result);