let firstName = "Rajesh"
    secondName = "Songara"

fullName = `My name is ${firstName} ${secondName}`
console.log(fullName)

// ######## String Methods

// console.log(fullName.toLowerCase());
// console.log(fullName.toUpperCase());

// console.log(secondName.indexOf("a"));
// console.log(secondName.lastIndexOf("a"));

// console.log(secondName.includes('f')); // Return TRUE/FALSE. It check the element in the string or array 

// console.log(secondName.slice(0,4)); //Excluding last one part

// ######## Loose Equality (==) and Strict Equality Operator (===)
let value = 22
// console.log(value == '22');  // Focus only on value not type
// console.log(value === '22');  // Focus both type and value

str = 'My name is Rajesh Songara and also Rajesh in office';
console.log(str.indexOf('Rajesh'));
console.log(str.indexOf('Rajesh', 5));
console.log(str.lastIndexOf('Rajesh'));
console.log(str.lastIndexOf('Rajesh', 6));
console.log(str.search('Rajesh'));
console.log(str.search(/Rajesh/));
console.log(str.match('Rajesh'));
console.log(str.match(/Rajesh/));
console.log(str.match(/Rajesh/g));
console.log(str.match(/Rajesh/gi)); //If you want to search case insensitive, the insensitive flag (i) must be set:
// Note: matchAll() is an ES2020 feature.
// matchAll() does not work in Internet Explorer.
console.log(str.matchAll('Rajesh'));
console.log(str.matchAll(/Rajesh/g));
console.log(str.matchAll(/Rajesh/gi)); // If you want to search case insensitive, the insensitive flag (i) must be set:
console.log(str.includes('Rajesh')); 
console.log(str.includes('Rajesh', 12)); // Check if a string includes "Rajesh". Start at position 12:
console.log(str.startsWith('My')); // True
console.log(str.startsWith('Rajesh')); // False
console.log(str.endsWith('office')); // True
console.log(str.endsWith('Rajesh')); // False