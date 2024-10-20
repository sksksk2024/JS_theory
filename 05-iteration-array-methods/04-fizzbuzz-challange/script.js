// For Loop
// for (let i = 1; i <= 100; i++) {
//   if ( i % 3 === 0 && i % 5 === 0) { 
        // or you can say i % 15 === 0?
//     console.log('FizzBuzz');
//   } else if ( i % 3 === 0 ) {
//     console.log('Fizz');
//   } else if ( i % 5 === 0 ) {
//     console.log('Buzz');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// While Loop
let i = 1;
while ( i <= 100 ) {
  if ( !(i % 3) && !(i % 5) ) {
    console.log( 'FizzBuzz' );
  } else if ( !(i % 3) ) {
    console.log( 'Fizz' );
  } else if ( !(i % 5) ) {
    console.log( 'Buzz' );
  } else {
    console.log( 'Number ' + i );
  }
  i++;
}