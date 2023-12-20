// const firstName = 'Rajesh'
// console.log(firstName.length)

// const age = 30;
// console.log(name + age); // Note: This is old fashion

// Modern Fashion ======

let name = new String('Rajesh')
const number = 30;
let otherName = name
otherName = new String("Songara")

console.log(name); // return String Object {'Rajesh'}, lenght of string and many mathods/functions so we can access these.
console.log(otherName);
// Note: This will not return same value as heap memory alocation

console.log(typeof name); // return Object
console.log(`My Nane is ${name} and my roll number is ${number}`); // It's called STRING INTERPOLATION

console.log(name.__proto__); // to get all methods/functions of the String Object
console.log(name.length);
console.log(name.toUpperCase());

console.log(name.substring(0, 4)); //Slice the string. this cannot in reverse order
console.log(name.slice(-4, 6)); //Slice the string but it can be in reverse order