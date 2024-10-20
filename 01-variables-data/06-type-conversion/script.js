let amount = 'hello';

// Convert string to number
amount = parseInt(amount);
// amount = +amount; prefered
// amount = Number(amount);

// Convert number to string
// amount = amount.toString();
// amount = String(amount);

// Convert string to decimal
// amount = parseFloat(amount);

// Convert number to boolean
// amount = Boolean(amount);

// NaN(not a number)
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3)

console.log(amount, typeof amount);