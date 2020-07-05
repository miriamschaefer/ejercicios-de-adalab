// Estructura de datos para un usuario

// Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. A continuación seguiremos los siguiente pasos:

'user strict';

const job = 'developer';

// Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):

// Añadiremos una propiedad llamada firstName y le asignaremos un valor.
// Añadiremos una propiedad llamada lastName y le asignaremos un valor.
// Añadiremos una propiedad llamada age y le asignaremos un valor numérico.
// Añadiremos una propiedad job a la que asignaremos el valor de la constante job

const user = {};
user.job = job;
user.firstName = 'Miriam';
user.lastName = 'Suárez';
user.age = 29;

// Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto

console.log(user.job);

// Aumentaremos en 1 la edad del usuario

console.log(user.age + 1);

const newName = user;
newName.name;

// Cambiaremos el nombre del usuario por otro distinto

user.name = 'Loreto';

// ¿y cómo se vuelve al primer nombre?

console.log(user.name);

console.log(user.age);
console.log(user.lastName);
