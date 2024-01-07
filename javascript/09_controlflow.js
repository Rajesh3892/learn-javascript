// Falsy Value: false, null, undefined, NaN, 0, -0, "", BigInt 0n

// Truthy Value: True, "0", 'false', " ", [], {}, function(){}, 

let userArray = []
if (userArray.length === 0) {
    console.log("Array is empty");
}

let userObj = {}
if (Object.keys(userObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let name1 = null ?? "Anonymous"; // Anonymous
let age1 = undefined ?? 25; // 25
let age2 = 5 ?? 10 // 5
let age3 = null ?? 10 ?? 20 //20


// Turniary Operator Syntex
const num = 10 > 9 ? true : false;
console.log(num); //true