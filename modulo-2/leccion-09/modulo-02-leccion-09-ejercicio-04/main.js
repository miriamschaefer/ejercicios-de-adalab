'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

// mostrar el número total de tareas y el contador de tareas. Crear la lista.

const taskContainer = document.querySelector('body');

taskContainer.innerHTML =
  `Número total de tareas: ${tasks.length}` + `<p class="js-tasks-alert"><p>`;

taskContainer.innerHTML += `<ul class="list js-list"></ul>`;

// mostrar tareas

const taskList = document.querySelector('.js-list');

for (let i = 0; i < tasks.length; i++) {
  taskList.innerHTML += `<li>${tasks[i].name}</li>`;
}

for (const task of tasks) {
  if (tasks.completed === true) {
    task.classList.add('complete');
    console.log('holi');
  }
}

// b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
// c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
// la tarea debe mostrarse como completada (tachada)
// debemos modificar su estado (propiedad completed) en el array tasks.
// d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.
