const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing (literal to object)
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing (object to literal)
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Other types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

const funcLit = function (x) {
  return x * x;
}

console.log(funcLit, typeof funcLit);

console.log(funcLit(5));

const funcObj = new Function ('x', 'return x * x');

console.log(funcObj(3));

const obj1 = {};

const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);