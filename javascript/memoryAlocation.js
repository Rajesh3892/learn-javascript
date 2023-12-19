// Stack (Primitive) memory acocation
// Primitive Datatype: String, Number, Boolean, null, undefined, symbol, bigInt
let myYouTubeName = 'CodeWithRajesh';
let anotherName = myYouTubeName
anotherName = 'IntertainmentWithRaj'

console.table(myYouTubeName, anotherName);

// Heap (Non-Primitive) memory acocation
// Non-Primitive Datatypes: Object, Array, Function

let userOne = {
    name : "Raj",
    age : 30,
    profession : "Software Developer"
}

// let userTwo = {
//     ...userOne,
//     profession : "Data Scientist",
//     city : "New York"
// }

let userTwo = userOne

userTwo.name = "Prahalad"
console.log(userOne);
console.log(userTwo);