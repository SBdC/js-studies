/* eslint-disable no-console */
// Generate Random Whole Numbers within a Range

// Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {
  const randomNumber = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return randomNumber;
}

console.log(randomRange(2, 8));

// Use the parseInt Function with a Radix
// parseInt(string, radix);

function convertToInteger(str) {
  const a = parseInt(str, 2);
  return a;
}

console.log(convertToInteger('10011'));

// Use Multiple Conditional (Ternary) Operators
// function findGreaterOrEqual(a, b) {
//     return (a === b) ? "a and b are equal"
//       : (a > b) ? "a is greater"
//       : "b is greater";
//   }

function checkSign(num) {
  return (num > 0) ? 'positive'
    : (num < 0) ? 'negative'
      : 'zero';
}

console.log(checkSign(10));
