'use strict';

// En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.

// coger info del botón y del input
const button = document.querySelector('.js-button');

function findCharacter() {
  const inputName = document.querySelector('.js-input').value;

  fetch(`https://swapi.dev/api/people/?search=${inputName}`)
    .then((searchResponse) => searchResponse.json())
    .then((searchData) => {
      const characters = searchData.results;
      const characterList = document.querySelector('.js-characters');
      let content = '';

      for (let index = 0; index < characters.length; index++) {
        const name = characters[index].name;
        const gender = characters[index].gender;

        console.log(name);
        console.log(gender);

        content += `<li>Character's name is ${name} and its gender is ${gender}</li>`;
      }
      characterList.innerHTML = content;
    });
}
button.addEventListener('click', findCharacter);
