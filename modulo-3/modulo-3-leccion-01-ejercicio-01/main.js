'use strict';

class Square {
  perimeter(side) {
    return side * 4;
  }

  //al ser base por altura, y el cuadrado siempre tener la misma base, podemos elevarlo al cuadrado, que es para lo que se usa el Math.pow.
  area(side, exponent) {
    return Math.pow(side, exponent);
  }
}

const newSquare = new Square();

console.log(newSquare.perimeter(9));
console.log(newSquare.area(9, 2));
