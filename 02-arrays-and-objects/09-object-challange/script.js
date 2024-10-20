// Step 1

const library = [
  {
    title: "Matilda",
    author: "Garry",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Datilda",
    author: "Barry",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Eatilda",
    author: "Carry",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3

const { title: firstBook } = library[0];

console.log(firstBook); // Matilda

// Step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);