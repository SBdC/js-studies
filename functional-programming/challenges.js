// CONVERT ARRAY

const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
  'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
  'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
  'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
  'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes = (votes) => votes.reduce((acc, name) => ({
  ...acc,
  [name]: acc[name] ? acc[name] + 1 : 1,
}), {});

/* Expected Output (something like this):
    {
        Harry: <some number>
        Donna: <some number>
        Rick: <some number>
        ...
    }
*/
// eslint-disable-next-line no-console

// ANAGRAMS

// two words that are anagrams, means that they have the exact same count
// of the exact same letters, but in different orders.
// So if order doesn't matter, we cam express our words like an object
// that contains each of the letters that the word contains,
// with a count of how many letters it has.

const countOccurrences = (arr) => arr.reduce((acc, str) => ({
  ...acc,
  [str]: acc[str] ? acc[str] + 1 : 1,
}), {});

const hasSameLetterCount = (word1, word2) => {
  // split into letters
  const word1Count = countOccurrences(word1.split(''));
  const word2Count = countOccurrences(word2.split(''));
  // check if they have the same amount of letters and find the words with the same letters
  return Object.keys(word1Count).length === Object.keys(word2Count).length
        && Object.keys(word1Count).every((letter) => word1Count[letter] === word2Count[letter]);
};

// filter and return the anagrams, not including the word itself

const findAnagrams = (word, allWords) => allWords
  .filter((entry) => hasSameLetterCount(word, entry))
  .filter((anagram) => anagram !== word);

// Error Messages
const currentInputValues = {
  firstName: 'Shaun', // Must be at least 2 characters
  lastName: '', // Must be at least than 2 characters
  zipCode: '12345', // Must be exactly 5 characters
  state: '', // Must be exactly 2 characters
};

const inputCriteria = {
  firstName: [
    (value) => (value.length >= 2
      ? ''
      : 'First name must be at least 2 characters'),
  ],
  lastName: [
    (value) => (value.length >= 2
      ? ''
      : 'Last name must be at least 2 characters'),
  ],
  zipCode: [
    (value) => (value.length === 5
      ? ''
      : 'Zip must be exactly 5 characters long'),
  ],
  state: [
    (value) => (value.length === 2
      ? ''
      : 'State must be exactly 2 characters long'),
  ],
};

const getErrorMessages = (inputs, criteria) => Object.keys(inputs).reduce((acc, fieldName) => [
  ...acc,
  ...criteria[fieldName].map((test) => test(inputs[fieldName])),
], []).filter((message) => message);

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
*/

export {
  tallyVotes, electionVotes, findAnagrams, getErrorMessages, currentInputValues, inputCriteria,
};
