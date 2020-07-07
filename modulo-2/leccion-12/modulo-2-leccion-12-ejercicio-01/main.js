'use strict';

const numbers = [1, 2, 3, 4, 5];

//uso un bucle normal porque importa el orden de los elementos (cada li tiene que llevar un número diferente del array)

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  // esto marca que a cada vuelta del bucle por el length del array (numbers en este caso), se me creará un nuevo <li>

  const newLi = document.createElement('li');

  //al que a cada vuelta del bucle le añadirá el elemento que contiene su índice.

  const content = document.createTextNode(numbers[i]);

  //y esto es lo que lo mete en los <li> creados antes.
  newLi.appendChild(content);

  // esto lo añade al elemento UL creado en el HTML previamente

  const pageUl = document.querySelector('.js-ul');
  pageUl.appendChild(newLi);
}
