/* eslint-disable no-console */
/* eslint-disable immutable/no-mutation */
/* eslint-disable no-param-reassign */
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (prop === 'tracks' && !records[id].hasOwnProperty(prop)) {
    records[id][prop] = [];
    records[id][prop].push(value);
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
  } else if (value === '') {
    delete records[id][prop];
  }
  return records;
}

// eslint-disable-next-line no-console
updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');

const myArray = [];
let i = 0;

while (i < 6) {
  myArray.unshift(i);
  i++;
}

// Setup
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//     for (let index = 0; index < contacts.length; index++) {
//     if(contacts[index].firstName === name && contacts[index].hasOwnProperty(prop)){
//      return contacts[index][prop];
//     }

//       else if(contacts[index].firstName === name && !contacts[index].hasOwnProperty(prop) ){
//       return "No such property";
//      }

//   }
//   // Only change code above this line
// }

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {

//       if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)){

//         return contacts[i][prop];
//       }
//       else if(contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)){
//         return "No such property";
//       }
//     }
//   return "No such contact";

//     }

function lookUpProfileold(name, prop) {
  for (let index = 0; index < contacts.length; index++) {
    if (contacts[index].firstName === name && contacts[index].hasOwnProperty(prop)) {
      return contacts[index][prop];
    }

    if (contacts[index].firstName === name && !contacts[index].hasOwnProperty(prop)) {
      return 'No such property';
    }
    return 'No such contact';
  }
}

// other ways

function lookUpProfile(firstName, prop) {
  const profile = contacts.find((contact) => contact.firstName === firstName);

  if (!profile) {
    console.log(`no profile found for ${firstName}`);
    return;
  }

  if (!profile[prop]) {
    console.log(`no ${prop} found on ${firstName} profile`);
    return;
  }

  return profile[prop];
}

console.log(lookUpProfile('Harry', 'likes'));
console.log(lookUpProfile('Akira', 'address'));

console.log(lookUpProfile('Kristian', 'lastName'));

console.log(lookUpProfile('Bob', 'number'));

// const objs = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'David' },
//   { id: 4, name: 'Zayne' },
// ];

// let found = false;

// for (let i = 0; i < objs.length; i++) {
//     if (objs[i].name === 'meta') {
//         found = true;
//         break;
//     }
// }

// console.log(found);
