'use strict';

// Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:

const pearBasket = {
  // Número máximo de peras
  max: 50,
  // Número mínimo de peras
  min: 4,
  // Número actual de peras
  current: 10,
  // Número inicial de peras
  start: 2,

  // Y varios métodos que hagan:

  // Añadir al cesto una pera

  add: function (pears) {
    if (this.current < this.max) {
      return this.current + pears;
    }
  },

  // Sacar del cesto una pera

  take: function (pears) {
    if (this.current - pears <= this.min) {
      return `No te doy peras porque me quedan solamente ${pearBasket.min}`;
    } else {
      return `Nos quedan ${this.current - pears} peras`;
    }
  },

  // Restablecer el número de peras al valor inicial.

  restart: function (pears) {
    this.current === this.start;
    return this.start;
  },
};

let addPears = pearBasket.add(2);
let takePears = pearBasket.take(6);
let startPears = pearBasket.restart();

// Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.

console.log(`Tenemos ${addPears} peras`);
console.log(takePears);
console.log(`Vuelvo a tener ${startPears} peras`);
