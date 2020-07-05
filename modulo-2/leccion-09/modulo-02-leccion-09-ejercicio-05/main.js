'use strict';

// Para resolver este problema manejamos un array que va a ir añadiendo un triángulo por fase de loop y tendrá tantas fases de loop como el usuario escoja -> fases de loop = height del tree

// Creamos una función que admite un parámetro. Este parámetro equivale a la altura del árbol de navidad
function drawTree(height) {
  // Creamos array vacía:
  let tree = [];
  for (let i = 0; i < height; i++) {
    tree.push('▲');
    console.log(tree);
  }
}
