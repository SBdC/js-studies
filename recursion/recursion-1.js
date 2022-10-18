/* eslint-disable no-plusplus */

// Concept of RECURSION
// Recursion occurs when function call themselves to perform a task
// Recursion is a problem-solving technique where solution of a larger problem
// is defined in terms of smaller instances of itself.

// what makes a recursive function?
// there must be a case base for all accurate inputs
// there must be a base case that does not recursive calls
// When recursive calls are made, it should call a smaller instance
// and make forward progress towards the base case.

// When should recursion stop calling itself?
// when it hits a base case

// find big problem, small problem, relationship
// from known to unknown

// Math Power Function = exponential

// function power(base, exponent) {
//   let result = 1;

//   for (let i = 1; i <= exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// we know from mathematics that any number raised to power zero, we'll give one.
// there is our base case
// finally, we need to link the big problem to the small problem.
// The pattern is that four raised to power n,
// is sent in as four times four raised to power and minus one.
// Math.pow(4, n) = 4 * Math.pow( 4 , n - 1 )

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

// Factorial
// In mathematics, the factorial of a positive integer N,
// denoted by N factorial, is the product of all positive integers less than
// or equal to N. Notice that the factorial of zero is one.
// n! = n * ( n - 1 )!
// 0! === 1! = 1

// function factorial(position) {
//   let answer = 1;
//   for (let num = position; num > 0; num--) {
//     answer *= num;
//   }
//   return answer;
// }

// small problem === base case
// factorial 0 is 1

function factorial(position) {
  if (position === 0) {
    return 1;
  }
  return position * factorial(position - 1);
}

// export default power;
export {
  power, factorial,
};
