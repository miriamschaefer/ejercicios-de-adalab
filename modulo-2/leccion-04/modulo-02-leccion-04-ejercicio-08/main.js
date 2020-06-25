// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"

// devuelve y porque al estar declarada fuera de la variable primero acude a eso ¿?¿?
