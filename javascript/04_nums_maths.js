const num = 100;
// console.log(num)

const balance = new Number(100);
// console.log(balance); // Note: This will return Number Object with many methods/Functions

// console.log(balance.toString());

// console.log(balance.toFixed(2)); // It will return 2 decimal values after the whole number

const totalAmount = 123.989
// console.log(totalAmount.toPrecision(3)); // This will return the total 3 digits with round-up numbers
// console.log(totalAmount.toPrecision(4)) // This will return 4 digits with first 3 whole number and second wound-up of decimal

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en')); // This will convert it into a string and display in English (US) format
// console.log(hundreds.toLocaleString('en-IN')); // This will convert into string and add commas for thousands, millions in INDIA format



// +++++++++++ MATHS +++++++++++++//

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.round(25.6));
// console.log(Math.ceil(4.2)); // Return upper whole number
// console.log(Math.floor(4.9)); // return lowest whole number
// console.log(Math.min(6,5,7,1,4));
// console.log(Math.max(6,5,7,1,4));

console.log(Math.random()) // Random function return value between 0 to 1
console.log((Math.random() * 10) + 1)
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

// Get random value from 10 to 20
const min = 10;
const max = 20;
let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Value is ${randomValue}`);