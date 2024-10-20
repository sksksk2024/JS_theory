// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Value
// - Everything else that is not falsy 
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = '0';

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy')
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = ['Posts One'];
// console.log(posts.length);
if (posts.length > 0) {
  console.log('Lists Posts');
} else {
  console.log('No Posts To Lists');
}

// Checking for empty objects
const user = {
  // name: 'Brad',
};
// console.log(user.length); cant work
console.log(Object.keys(user).length); // but this does
if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No user');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);