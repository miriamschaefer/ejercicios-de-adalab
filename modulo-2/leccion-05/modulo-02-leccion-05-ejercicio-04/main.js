// Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:

// Escuchar el evento scroll sobre la ventana window.

// Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.

"use strict";

const onScroll = document.querySelector(".js-div");
// let scrollPixels = window.scrollY;

function changeBackgroundColor() {
  console.log(window.scrollY);

  if (window.scrollY === 0) {
    onScroll.classList.remove("js-scroll-1");
    onScroll.classList.remove("js-scroll-2");
  } else if (window.scrollY > 250) {
    onScroll.classList.add("js-scroll-1");
    onScroll.classList.remove("js-scroll-2");
  } else if (window.scrollY < 250) {
    onScroll.classList.add("js-scroll-2");
    onScroll.classList.remove("js-scroll-1");
  }
}

window.addEventListener("scroll", changeBackgroundColor);
