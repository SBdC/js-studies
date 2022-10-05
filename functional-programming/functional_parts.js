/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// spread operator - spreads the properties of one object inside another
const person = {
  name: 'Sara',
  age: 39,
  hairColor: 'brown',
  eyeColor: 'brown',
};

const carrerData = {
  title: 'developer',
  company: 'ABC Software',
};

const personWithCarrerData = {
  ...person,
  ...carrerData,
};

// one can also just choose properties
// const personWithCarrerData = {
//     ...name:person.name,
//     ...carrerData,
//   };

const updates = {
  name: 'Brava',
};

// updates the name
const updatedPerson = {
  ...person,
  ...updates,
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// instead of
// numbers.push(6)
const newNumbers = [
  0,
  ...numbers,
  6,
];

// MAP
// map won't change the original array only returns a modify copy

// const doubleNumbers = [];

// the old way
// for (let index = 0; index < numbers.length; i++) {
//   const doubled = numbers[index] * 2;
//   doubleNumbers.push(doubled);
// }
// or worse we modify the elements in place which destroys the original data
// for (let index = 0; index < numbers.length; i++) {
//   numbers[index] = numbers[index] * 2;
// }

// this does nothing
// numbers.map(x => x * x);
// unlike reverse that will change the array
// numbers.reverse();

// the functional way

const double = (x) => x * 2;

const doubleNumbersFunc = numbers.map(double);

// FILTER
// Filter is used when you want to find all of the elements
// in an array that fit some kind of criteria.
// we pass a function that returns either true or false for each element
// If the function returns true for a given element,
// then that element's included in the final array.
// Otherwise, it's left out.

// old way
// const evenNumbers = [];
// for (let index = 0; index < numbers.length; i++) {
//   if(numbers[i] % 2 === 0){
//     evenNumbers.push(numbers[i]);
//    }
// }

const isEven = (x) => x % 2 === 0;

const evenNumbers = numbers.filter(isEven);

const words = ['wordle', 'wordy', 'bye'];
const isLongerThen5 = (word) => word.length > 5;
const wordsLongerThen5 = words.filter(isLongerThen5);

// higher order function with the variable lengths
const createLengthTest = (minLenght) => (word) => word.length > minLenght;

const longWords = words.filter(createLengthTest(5));

// EVERY / SOME

// return  a single boolean

const employees = [{
  name: 'jane',
  salary: 60000,
  age: 54,
  jobTitle: 'developer',
}, {
  name: 'john',
  salary: 490000,
  age: 55,
  jobTitle: 'receptionist',
},
{
  name: 'blake',
  salary: 250000,
  age: 34,
  jobTitle: 'boss',
},
{
  name: 'hanna',
  salary: 1500000,
  age: 24,
  jobTitle: 'engineer',
},
{
  name: 'jerry',
  salary: 40000,
  age: 24,
  jobTitle: 'developer',
},
{
  name: 'hanna',
  salary: 40000,
  age: 24,
  jobTitle: 'developer',
},
];

const makesMoreThanOneMillion = (employee) => employee.salary > 1000000;

const result = employees.some(makesMoreThanOneMillion);

const formValues = [
  'Shaun',
  'Hazel',
  'Meta',
  '',
];
// double exclamation mark notation to convert our strings into Booleans.
// And this works because, in JavaScript, an empty string is a falsey value.
const isNotEmpty = (string) => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);

// SLICING

//  slice is not a higher order function.
// It doesn't take a function as an argument, like map or filter,
// does not mutate, returns a copy
numbers.slice(3, 8);

// what if we used slice to simply create a copy of the array for us,
// and then called sort or one of those other mutating methods on that copy

// all we have to do is take a slice which starts at the beginning of the array,
// at index zero, and includes the whole array.
// the default arguments for slice, if we simply call slice without any arguments, do exactly that

numbers.slice().reverse();

// SORTING

// sort mutates, so use it with slice
// sort like Map, Filter, Every and Sum takes a function as an argument.
// However, unlike the other functions, the function we pass to Sort called a
// Comparator function has two arguments instead of one.
// These two arguments are a little more abstract and stand for
// any two elements in our array that could be compared.

// const sortedNumbers = numbers.slice().sort((a, b) => {
// ...
// return -1; a should come before b

// ...
// return 1; b should come before a

// ...
// return 0; leave the elements in whatever order we found them
// });

const mixedUpNumbers = [10, 2, 3, 6, 7, 9, 1, 5];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};
// note, that these Ascending and Descending functions
// will work equally well if we're sorting arrays of strings.

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const sortedNumbers = mixedUpNumbers.slice().sort(descending);

// REDUCING

// duce allows us to do is take an array of data, and reduce it down to a single value.

// taking numbers array as the example for  a sum of all values
// 0 <- this is the starting value
// 0 + 1 <- add the first number in the array
// 1 + 2 <- add the second number in the array
// 3 + 3 <- add the third number in the array

// takes a function as an argument.
// This function in it's simplest form takes two arguments.
// The first argument represents the current value that we've built up on top of the initial value.
// We call this argument the accumulator, and by convention,
// we just use the abbreviation acc in the function's arguments.
// The second argument represents the current element of the array that we're looking at,
// much like in the map or filter functions.
// And the purpose of this function that we pass to reduce is to tell reduce how to combine
// the current value of the accumulated variable, what we've got so far,
// with the current element that we're looking at.

// myArray.reduce((acc, element) => {
//   ...
//   return ...
// }

// for the sum of elements
// const sum = numbers.reduce((acc, element) => acc + element, 0);

const sum = numbers.reduce(
  (acc, x) =>
  // console.log(`acc is ${acc}`);
  // console.log(`x is ${x}`);
    // eslint-disable-next-line implicit-arrow-linebreak
    acc + x,
  0,
);

// Do not forget
// In addition to the function that we pass it as an argument,
// we provide it with another argument - the starting value.
// This is the value that reduce will start with when looking at the elements in our array.

const product = numbers.reduce(
  (acc, x) => acc * x,
  0,
);
// will be zero because the starting value is 0, so you should use 1 for this one
console.log(product);

// COMBINING FUNCTIONS

// calculate how the average salary of the developers in our data set
// compares to the average salary of the other people in our data set.

const developers = employees.filter((employee) => employee.jobTitle === 'developer');
const developerSalaries = developers.map((developer) => developer.salary);
const totalDeveloperSalaries = developerSalaries.reduce((acc, element) => acc + element, 0);
const averageDeveloperSalaries = totalDeveloperSalaries / developerSalaries.length;
console.log(averageDeveloperSalaries);

const nonDevelopers = employees.filter((employee) => employee.jobTitle !== 'developer');
const nonDeveloperSalaries = nonDevelopers.map((nonDeveloper) => nonDeveloper.salary);
const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce((acc, element) => acc + element, 0);
const averageNonDevelopersSalaries = totalNonDeveloperSalaries / nonDeveloperSalaries.length;
console.log(averageNonDevelopersSalaries);

// CHALLENGE recreate the map funtion
// create is a function called map that takes two arguments.
// The first argument is an array and the second argument is a function that should be applied
// to every element in the array.
// Your task is to recreate the map function in this way, obviously without using JavaScript's//
// built in map function.

const mapi = (arr, func) => {
  // eslint-disable-next-line no-plusplus, prefer-const
  let newArray = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < arr.length; index++) {
    // eslint-disable-next-line no-shadow
    const result = func(arr[index]);
    newArray.push(result);
  }
  return newArray;
};

// solving challenge with reduce

// ake sure you either remove the brackets from the function body or use the return keyword.
// Otherwise your map function will always return undefined.
const mapi2 = (arr, func) => arr.reduce((acc, x) => [
  ...acc,
  func(x),
], []);

// export default personWithCarrerData;
export {
  personWithCarrerData, newNumbers, doubleNumbersFunc,
  evenNumbers, wordsLongerThen5, longWords, result, allFieldsFilled,
  numbers, sortedNumbers, sum, product, developers, averageDeveloperSalaries,
  averageNonDevelopersSalaries, mapi, mapi2,
};
