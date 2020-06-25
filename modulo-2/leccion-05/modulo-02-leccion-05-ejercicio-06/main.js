const input = document.querySelector(".js-input");

function changeText() {
  const print = document.querySelector(".js-text");
  print.innerHTML = event.currentTarget.value;
}

input.addEventListener("keydown", changeText);

// Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
