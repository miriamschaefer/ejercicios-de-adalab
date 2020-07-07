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

//EJERCICIO 4

const premiumUsers = users.filter((user) => user.isPremium === true);

console.log(premiumUsers);

// EJERCICIO 5

const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter((pin) => pin % 2 === 0);
console.log(evenPins);

// EJERCICIO 6

const users7 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const allowedUsers = users7.filter(
  (user7) => user7.pin % 2 === 0 && user7.isPremium === true
);

console.log(allowedUsers);

//EJERCICIO 12

// users7.sort(users7.name);
// console.log(users7);

// EJERCICIO 7

const times = [56, 9, 45, 28, 35];

const result = times.reduce((acc, number) => acc + number, 0);

console.log(result / times.length);

//EJERCICIO 8

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const winner = runners.reduce((acc, contestant) => {
  return acc.time < contestant.time ? acc : contestant;
});

console.log(winner);

//EJERCICIO 11

runners.sort((a, b) => a.time - b.time);
console.log(runners);

// EJERCICIO 9

const isAStudent = runners
  .filter((runner) => runner.student === true)
  .reduce((acc, contestant) => {
    return acc.time < contestant.time ? acc : contestant;
  });

console.log(isAStudent);

// EJERCICIO 10

const usuarios = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const userProblem = usuarios.find((usuario) => usuario.pin === 5232);
console.log(userProblem);

const positionProblem = usuarios.findIndex((usuario) => usuario.pin === 5232);
console.log(positionProblem);

const removeUser = usuarios.splice(3, 1);
console.log(usuarios);
