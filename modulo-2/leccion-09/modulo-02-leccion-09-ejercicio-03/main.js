'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
console.log(lostNumbers);
// Vamos a crear una función bestLostNumber que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba.

// Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.

let evenLostNumbers = [];
let multiplesThreeLostNumbers = [];

function bestLostNumber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      evenLostNumbers.push(lostNumbers[i]);
    }
  }

  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      multiplesThreeLostNumbers.push(lostNumbers[i]);
    }
  }
}

// Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.
// Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.
// Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
// Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
