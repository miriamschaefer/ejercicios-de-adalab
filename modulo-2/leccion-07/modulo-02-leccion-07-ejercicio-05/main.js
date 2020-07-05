let sum = [4, 5, 6, 15, 22];

let median = 0;

for (let i = 0; i < sum.length; i++) {
  median += sum[i] / sum.length;
}

document.write('La media es ' + median + '<br/>');

// añade un nuevo número al array y repite el cálculo

sum[5] = 8;

for (let i = 0; i < sum.length; i++) {
  median += sum[i] / sum.length;
}

document.write('La nueva media es ' + median);

// generaliza el código creando una función llamada average

let numbers = [];
function average() {
  const sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const sum = numbers[index];
    return console.log(sum);
  }
}

console.log(average([5, 5, 5, 5]));
