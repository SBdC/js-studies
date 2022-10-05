/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// functional programming is declarative
// focus on the what things are
// core concepts are immutability,
// separations of data and functions and first class functions

const sayHello = (el, name) => {
  const element = el;
  // eslint-disable-next-line immutable/no-mutation
  element.innerHTML = `Hello ${name}`;
};

const sayHello2 = sayHello;

// function myFunction(arg1, arg2) {
//   // function body examplr

//   return arg1 + arg2;
// }

// const myOtherFunction = function (arg1, arg2) {
//   // function body example
//   return arg1 + arg2;
// };

// const add = (x, y) => {
//   const sum = x + y;
//   return sum;
// };

const add = (x, y) => x + y;
// eslint-disable-next-line arrow-parens
// const double = number => number * 2;

// eslint-disable-next-line no-unused-vars
const getPersonData = () => ({
  name: 'john',
  age: 34,
});

// eslint-disable-next-line no-unused-vars
// const myFunction = true
//   ? () => console.log('first option')
//   : () => console.log('second option');

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time intensive operations here
  console.log('would fetch real data');
};

const fetchDataFake = () => ({
  name: 'john doe',
  age: 34,
});

// eslint-disable-next-line no-unused-vars
const fetchData = DEVELOPMENT
  ? fetchDataFake
  : fetchDataReal;

const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

let myNumber = 42;

const doubled = double(myNumber);
const minusOne = subtractOne(myNumber);
// ..

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5,
  Math.sqrt,
];

// procedural code, there is a better way to do this, only for demontrastion purposes

functionsArray.forEach(func => myNumber = func(myNumber));

const myNumberResult = myNumber;

const addNumber = (x, y) => x + y;
const subtractNumber = (x, y) => x - y;

const combine2and3 = func => func(2, 3);

combine2and3(addNumber); // 2+3
combine2and3((x, y) => x + y);
combine2and3(subtractNumber); // 2-3
combine2and3(Math.max);// 3

const createPrinter = () => () => console.log('hello');

// same as
// const createPrinter = function () {
//     return function () {
//         console.log('hello');
//     }
// }

// perfect example for a first class function - returning function

// const doubleNum = x =>  x * 2;
// const tripleNum = x =>  x * 3;
// const quadrupleNum = x =>  x * 4;

const createMultiplier = y => x => x * y;

const doubleNum = createMultiplier(2); // double
const tripleNum = createMultiplier(3); // triple
const quadrupleNum = createMultiplier(4);

doubleNum(2);

// example demostrating closure

const createPrinter2 = () => {
  const myFavoriteNumber = 42;

  return () => console.log(`My favourite number is ${myFavoriteNumber}`);
};

const printer = createPrinter2();

// has access to variable inside function
printer();

// when we return a function it still has access to the scope that it was returned from;

// console.log(myFavoriteNumber); // returns error

// implement private variable

const Person = ({ name, age, job }) => {
  const _name = name;
  const _age = age;
  const _job = job;

  return {
    getName: () => _name,
    getAge: () => age,
    getJob: () => job,

    // eslint-disable-next-line no-param-reassign
    setJob: newJob => job = newJob,
    // eslint-disable-next-line no-param-reassign
    setAge: newAge => age = newAge,
  };
};

const mePerson = Person({ name: 'Sara', age: 39, job: 'developer' });
console.log(mePerson.getJob()); // developer
mePerson.setJob('senior developer');
mePerson.setAge(40);
console.log(mePerson.getJob(), mePerson.getAge());
// mePerson.job; would return undefined

// higher-order functions
// cluttering a function with argument checking logic

const divideClut = (x, y) => {
  if (y === 0) {
    console.log('error, dividing by zero');
    return null;
  }
  return x / y;
};

// single responsibility principle - ensures clean code
// each piece of code have only one responsibility
// if you required to name two or three things is a sign you should refactor

const divide = (x, y) => x / y;
const secondArgumentIsnotZero = func => (...args) => {
  if (args[1] === 0) {
    console.log('error, dividing by zero');
    return null;
  }
  return func(...args);
};

const divideSafe = secondArgumentIsnotZero(divide);
console.log(divideSafe(7, 0));

export {
  sayHello2, add, myNumberResult, Person, mePerson, divideSafe,
};
