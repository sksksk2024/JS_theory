// alert('Hello');
// console.log(innerWidth);

const x = 100;

console.log(x, 'in global');

function run() {
  console.log(innerHeight);
  console.log(x, 'in fu');
}

run();

if (true) {
  console.log(x, 'in block');
}

function add() { 
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// console.log(y);

add();