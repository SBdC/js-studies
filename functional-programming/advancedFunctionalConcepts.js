/* eslint-disable no-console */
// CURRYING AND PARTIAL APPLICATION
// A function that has some number of arguments, and we fix some of those arguments to a set value.
// This gives us a function with less arguments than we had before.
//  there's a function that we use often in our code, where one or more of the arguments
// that we call it with is almost always the same, this is a good candidate
// for using partial application.

const add = (x, y, z) => x + y + z;
// 1
const addPartial = (x) => (y, z) => add(x, y, z);
// 2
const addPartial2 = (x, y) => (z) => add(x, y, z);
// 3
const addPartial3 = (x) => (y) => (z) => add(x, y, z);

// 1
const add5 = addPartial(5);
const sum1 = add5(1, 2);
// same as
// const sum = add(5, 1, 2);

// 2
const add5and1 = addPartial2(5, 1);
const sum2 = add5and1(2);

// 3 CURRYING
// const addFive = (addPartial3(5));
// const addFiveandSix = addFive(1);
// const sum3 = addFiveandSix(2);

const sum3 = addPartial3(5)(1)(2);

// RECURSION
// is the case when a function calls itsef
// it can lead to infinite loops, be careful, always tell the function when to stop

const countDown = (x) => {
  if (x < 0) return;
  console.log(x);
  countDown(x - 1);
};

countDown(10);

const countUp = (x, max) => {
  if (x > max) return;
  console.log(x);
  countUp(x + 1, max);
};

countUp(0, 10);

// FUNCTIONS AS OBJECTS
// functions are objects because they have properties like objects do.
// They have a name property for example that returns whatever name we gave the function.

const sayHello = () => console.log('Hello');
console.log(sayHello.name);
console.log(add.length);

// this prints a string representation of our function
console.log(add.toString());

//  There are 3 other function properties which are of interest to us
// from a functional standpoint: CALL, APPLY and BIND

// CALL
// call just calls our function.
// first argument of this call function allows us to change the value of the this keyword
// if we used it in our function.
//  Now in functional programming, we'll only use the this keyword inside functions very rarely,
// so we usually just end up passing null in for the first argument,
// and the rest of the arguments that we pass to call will be passed to our function
// and the result will be returned.

console.log(add.call(null, 1, 2, 3));
// same as console.log(add(1, 2, 3));

// APPLY
//  Apply is almost exactly the same as call,
// the only difference is that instead of passing the arguments we want to call our function with
// in the usual way, we pass apply an array of values which it passes to our function as arguments.

console.log(add.apply(null, [1, 2, 3]));
console.log(add.apply(null, [1, 2, 3]));

// We rarely use either call or apply in our code.
// First of all in functional programming we rarely use the this keyword inside of our functions.
// was used on OOP as a means to control internal state
// for apply we have now in ES6 the spread op

const args = [1, 2, 3];
console.log(add(...args));

// BIND
// has some real application in functional programming
// allows us to fix the value of certain arguments in a function and return another function
// that we can use to pass the rest of the arguments to get the result.

const add1 = add.bind(null, 1);
console.log(add1(2, 3));

// export default personWithCarrerData;
export {
  sum1, sum2, sum3,
};
