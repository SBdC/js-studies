/* eslint-disable no-plusplus */

// Math Power Function

function power(base, exponent) {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

// Factorial
// In mathematics, the factorial of a positive integer N,
// denoted by N factorial, is the product of all positive integers less than
// or equal to N. Notice that the factorial of zero is one.
// n! = n * ( n - 1 )!
// 0! === 1! = 1

function factorial(position) {
  let answer = 1;
  for (let num = position; num > 0; num--) {
    answer *= num;
  }
  return answer;
}

// Concept of RECURSION
// Recursion occurs when function call themselves to perform a task
// Recursion is a problem-solving technique where solution of a larger problem
// is defined in terms of smaller instances of itself.

// export default power;
export {
  power, factorial,
};
