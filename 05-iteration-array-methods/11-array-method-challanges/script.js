// Challange 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

// With just filter aparently It didn't work
const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email,
  }));

// console.log(youngPeople);

//Challange 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

// My Solution
// const positiveSum = numbers
//   .reduce((sum, number) => number >= 0 ? sum += number : sum += 0, 0);

// His Solution (shorter in memory)
const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((sum, number) => sum += number);

// console.log(positiveSum); // 79


//Challange 3 (capitalizing the first letter of a word beated me here :O)
const words = ['coder', 'programmer', 'developer'];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWords);