/* eslint-disable no-console */
import './style.css';
import words from 'an-array-of-english-words';
import javascriptLogo from './javascript.svg';
import setupCounter from './counter';
import {
  add, divideSafe, mePerson, myNumberResult, sayHello2,
} from './functional-programming/firstClassFunctions';
import {
  personWithCarrerData, newNumbers, doubleNumbersFunc,
  evenNumbers, wordsLongerThen5, longWords, allFieldsFilled, result, numbers,
  sortedNumbers, sum, mapi, mapi2,
} from './functional-programming/functional_parts';
import { sum1, sum2, sum3 } from './functional-programming/advancedFunctionalConcepts';
import {
  currentInputValues, electionVotes, findAnagrams, getErrorMessages, inputCriteria, tallyVotes,
} from './functional-programming/challenges';

// eslint-disable-next-line immutable/no-mutation
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>improve your javascript language skills</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p id="para"></p>
  </div>
`;

// first class functions

setupCounter(document.querySelector('#counter'));
sayHello2(document.querySelector('#para'), 'Sara');

console.log(add(1, 2));
console.log(myNumberResult);
console.log(mePerson.getName());
console.log(mePerson.getJob(), mePerson.getAge());
console.log(divideSafe(7, 0));

// functional parts

console.log(personWithCarrerData);
console.log(newNumbers);
console.log(doubleNumbersFunc);
console.log(evenNumbers);
console.log(wordsLongerThen5);
console.log(longWords);
console.log(result, allFieldsFilled);
console.log(numbers.slice().reverse(), numbers);
console.log(sortedNumbers);
console.log(sum);
console.log(mapi([1, 2, 3], (x) => x * 2));
console.log(mapi([5, 6, 7, 8, 9, 10], (x) => -x));
console.log(mapi(['a', 'b', 'c'], (x) => x.toUpperCase()));
console.log(mapi2([1, 2, 3], (x) => x * 2));
console.log(mapi2([5, 6, 7, 8, 9, 10], (x) => -x));
console.log(mapi2(['a', 'b', 'c'], (x) => x.toUpperCase()));

//  advanced functional concepts

console.log(sum1, sum2, sum3);

//  challenges

console.log(tallyVotes(electionVotes));
console.log(findAnagrams('login', words));

console.log(getErrorMessages(currentInputValues, inputCriteria));
