'use strict';
const darkInput = document.querySelector('.js-selector-1');
const lightInput = document.querySelector('.js-selector-2');
const form = document.querySelector('.js-form');
const body = document.querySelector('.js-body');
function pageColor() {
  if (darkInput.checked) {
    body.classList.add('dark-style');
    body.classList.remove('light-style');
  } else if (lightInput.checked) {
    body.classList.remove('dark-style');
    body.classList.add('light-style');
  }

  localStorage.setItem('light-skin', JSON.stringify(lightInput.value));
}

function keepData() {
  const savedSkin = localStorage.getItem('light-skin');
}

darkInput.addEventListener('click', pageColor);
lightInput.addEventListener('click', pageColor);

keepData();

// const getItem = localStorage.getItem('selector');
