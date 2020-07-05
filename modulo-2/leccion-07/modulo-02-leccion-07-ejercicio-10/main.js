'use strict';

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];

//Escribir un script que recorra los datos de este array

function printValues() {
  for (let i = 0; i < items.length; i++) {
    let position = i;
    let value = items[i];
    let type = typeof items[i];
    console.log(
      `El dato ${value} está en la posición ${position} y es de tipo ${type}`
    );
  }
}

console.log(printValues());
