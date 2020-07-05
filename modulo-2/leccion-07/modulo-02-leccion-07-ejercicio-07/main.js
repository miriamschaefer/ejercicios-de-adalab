'use strict';

//Estadísticas de adalabers

// En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.

const adalabers = {
  name: ['María', 'Lucía', 'Susana', 'Rocío', 'Inma'],
  age: [29, 31, 34, 25, 21],
  job: [
    'diseñadora',
    'ingeniera química',
    'periodista',
    'actriz',
    'diseñadora',
  ],
};

// Una función countAdalabers que devuelve el número de adalabers en el listado.

function countAdalabers() {
  return adalabers.name.length;
}

console.log(`Hay ${countAdalabers()} adalabers`);

//Una función averageAge que devuelve la media de edad de listado.

function averageAge() {
  let sumAge = 0;
  for (let index = 0; index < adalabers.age.length; index++) {
    sumAge += adalabers.age[index];
  }

  let result = sumAge / adalabers.age.length;
  return result;
}

console.log(`La media de edad es de ${averageAge()}.`);

// Una función theYoungest que devuelve el nombre de la adalaber más joven.

function theYoungest() {
  for (let index = 0; index < adalabers.age.length; index++) {
    //como math.max espera números se le pasan otros parámetros y se le aplica el apply, que llama a una función con determinado valor y argumentos de un array.

    return Math.min.apply(Math, adalabers.age);
  }
}

console.log(`La adalaber más joven tiene ${theYoungest()} años`);

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

function countDesigners() {
  let repeatedJobs = 0;

  for (let index = 0; index < adalabers.job.length; index++) {
    if (adalabers.job[index] === 'diseñadora') {
      repeatedJobs++;
    }
  }

  return repeatedJobs;
}

console.log(`Hay ${countDesigners()} diseñadoras en esta promo de Adalab`);

document.querySelector(
  '.js-paragraph'
).innerHTML = `Hay ${countAdalabers()} adalabers en esta promo, la media de edad es de ${averageAge()}, la adalaber más joven tiene ${theYoungest()} años y hay ${countDesigners()} diseñadoras en esta promoción de alumnas.`;
