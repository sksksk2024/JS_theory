// When you use more than 6 ifs, replace them with switch statement

const d = new Date(2022, 1, 10, 7, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1: 
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3: 
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or March');
}

switch (true) {
  case hour < 12:
    console.log('Good morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good night');
}