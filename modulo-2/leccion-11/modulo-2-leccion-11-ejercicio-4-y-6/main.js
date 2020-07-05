'use strict';

let username = document.querySelector('.js-input');
let userLastName = document.querySelector('.js-input-surname');

const paragraph = document.querySelector('.js-p');

function saveUsername() {
  // esto imprime la info en pantalla
  paragraph.innerHTML = `${username.value}  ${userLastName.value}`;

  let userData = {
    // esto guarda la info en un objeto
    name: username.value,
    surname: userLastName.value,
  };

  //transforma la info para localStorage
  localStorage.setItem('userData', JSON.stringify(userData));
}

//para recuperar los datos

function keepData() {
  const savedInfo = JSON.parse(localStorage.getItem('userData'));

  username.value = savedInfo.name;
  userLastName.value = savedInfo.surname;
  paragraph.innerHTML = `${username.value}  ${userLastName.value}`;
}

username.addEventListener('keyup', saveUsername);
userLastName.addEventListener('keyup', saveUsername);

keepData();
