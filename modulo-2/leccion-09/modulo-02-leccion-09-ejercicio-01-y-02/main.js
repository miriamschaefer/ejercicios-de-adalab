'use strict';

//este es el array donde se devuelven los números del 1-100
let numbers = [];

//crear una función

function get100Numbers() {
  //usamos un bucle
  for (let i = 0; i < 100; i++) {
    //y el método push para ir guardándolos (índice + 1 hasta 100)
    numbers.push(i + 1);
    console.log(numbers);
  }
}

get100Numbers();

//crear una función 100ReversedNumbers

function get100ReversedNumbers(array) {
  //llama a la función anterior
  console.log(array.reverse());
}

get100ReversedNumbers(numbers);
