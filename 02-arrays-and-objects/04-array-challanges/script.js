// // #1 challange

// let arr = [1, 2, 3, 4, 5];

// let x = arr.concat(6);

// arr = x.reverse(arr).concat(0); 


// // #2 challange

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// let arr3 = arr1.pop();
// let arr4 = arr1.concat(arr2);
// arr3 = arr4;

// console.log(arr3);

// Solutions
// 1.
const arr = [1,2,3,4,5];
// I can't chain the solution(cuz it consols the result alr)

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

arr.push(6);
arr.unshift(0);
arr.reverse();

// Result: [6,5,4,3,2,1,0]

// 2.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6,7, 8, 9, 10];

// sol 1
const arr3 = arr1.slice(0, 4).concat(arr2);

// sol 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);