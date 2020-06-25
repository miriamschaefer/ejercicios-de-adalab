"use strict";

let dogAge = 4;
let oneYear = 15;
let twoYears = 9;
let threeYears = 5;

if (dogAge === 1) {
  console.log(oneYear + " años humanos");
} else if (dogAge === 2) {
  console.log(oneYear + twoYears + " años humanos");
} else if (dogAge === 3) {
  console.log(oneYear + twoYears + threeYears + " años humanos");
} else if (dogAge > 3) {
  console.log(
    oneYear + twoYears + threeYears + (dogAge - 3) * 5 + " años humanos"
  );
}
