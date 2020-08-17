'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return this.side * 4;
  }

  area() {
    return this.side * this.side;
  }
}

const squareOne = new Square(1);
const squareTwo = new Square(3);
const squareThree = new Square(7);

console.log(squareOne.perimeter());
console.log(squareTwo.perimeter());
console.log(squareThree.perimeter());
console.log(squareOne.area());
console.log(squareTwo.area());
console.log(squareThree.area());
