// "use strict";

// function getEl(selector) {
//   return document.querySelector(selector);
// }

// const div1 = getEl(".btn");

// div1.innerHTML = "Holi";

// const div2 = getEl(".btn2");

// div2.innerHTML = "Holaaaa";

// const div3 = getEl(".btn3");

// div3.innerHTML = "HELLO";

//ejercicio 6

"use strict";

function getEl(selector) {
  const testElement = document.querySelector(selector);
  if (testElement === null) {
    return console.log(
      `No existe ningún elemento con clase, id o tag llamado ' ${selector}`
    );
  } else {
    return testElement;
  }
}

const result = (getEl(".btn").innerHTML = "Probandoooooo");
console.log(result);
