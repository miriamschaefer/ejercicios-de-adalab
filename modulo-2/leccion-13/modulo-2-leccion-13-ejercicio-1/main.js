'use strict';

const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((mark) => mark + 1);

const printExercise1 = document.createElement('p');
const resultExercise1 = document.createTextNode(
  `Las nuevas notas son ${inflatedMarks}`
);

printExercise1.appendChild(resultExercise1);

const body = document.querySelector('body');
body.appendChild(printExercise1);

//Ejercicio 2

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const greetingNames = names.map((name) => 'Bienvenida ' + name);

const printExercise2 = document.createElement('p');
const resultExercise2 = document.createTextNode(
  `Ejercicio 2: ${greetingNames}`
);

printExercise2.appendChild(resultExercise2);
body.appendChild(printExercise2);

//Ejercicio 3

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const premiumGreeting = users.map((user) => {
  if (user.isPremium === true) {
    console.log(`Bienvenida ${user.name}, gracias por confiar en nosotros`);
  } else if (user.isPremium === false) {
    console.log(`Bienvenida ${user.name}`);
  }
});

console.log(premiumGreeting);
