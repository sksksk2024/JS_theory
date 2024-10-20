// With Ifs
// const calculator = (num1, num2, operator) => {
//   if (operator === '+') {
//     console.log(num1 + num2);
//   } 
  
//   else if (operator === '-') {
//     console.log(num1 - num2);
//   } 
  
//   else if (operator === '*') {
//     console.log(num1 * num2);
//   } 
  
//   else if (operator === '/') {
//     console.log(num1 / num2);
//   } 
  
//   else {
//     console.log('ERROR');
//   }
// }

// With Switch
const calculator = (num1, num2, operator) => {
switch (true) { // true is very important/fundamental
  case operator === '+':
    console.log(num1 + num2);
    break;
  case operator === '-':
    console.log(num1 - num2);
    break;
  case operator === '*':
    console.log(num1 * num2);
    break;
  case operator === '/':
    console.log(num1 / num2);
    break;
  default:
    console.log('ERROR');
}
}


calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');