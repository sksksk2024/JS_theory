// My solution

// let x = Math.floor(Math.random() * 100 + 1);
// let y = Math.floor(Math.random() * 50 + 1);

// const sumOutput = x + y;
// const differenceOutput = x - y;
// const productOutput = x * y;
// const quotientOutput = x / y;
// const rmOutput = x % y;

// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

// His Solution
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get the sum
const sum = x + y;
const sumOutput =  `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x - y;
const differenceOutput =  `${x} - ${y} = ${diff}`;
console.log(differenceOutput);

// Get the product
const pro = x * y;
const productOutput = `${x} * ${y} = ${pro}`;
console.log(productOutput);

// Get the div
const div = x / y;
const quotientOutput = `${x} / ${y} = ${div}`;
console.log(quotientOutput);

// Get the mod
const mod = x % y;
const rmOutput = `${x} % ${y} = ${mod}`;