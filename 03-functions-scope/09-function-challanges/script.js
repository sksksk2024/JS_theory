// Challange 1

// function getCelsius (F) {
//   let C = (F - 32) * 5 / 9;
//   return C;
// };

// const getCelsius = (F) => (F - 32) * 5 / 9;

// console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Solution 1

// function getCelsius (f) {
//   const celsius = (f - 32) * 5 / 9;
//   return celsius;
// }

// const getCelsius = (f) => (f - 32) * 5 / 9;

// console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challange 2

// const minMax = (arr) => 
//   console.log(`{ 
//     min: ${Math.min(...arr)}, 
//     max: ${Math.max(...arr)} }`
//   );



// console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }

// Sol 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max
//   }
// }

// console.log(minMax([1,2,3,4,5]));

// Challange 3

// console.log(`a rectangle with a length of ${window.innerHeight} and a width of ${window.innerWidth} is ${window.innerHeight * window.innerWidth}`); WRONG

// Solution 3 !!!

((length, width) => { 
  const area = length * width;

  const output = `The area of a length of ${length} and a width of ${width} is ${area}.`

  console.log(output);
 })(10, 5);
