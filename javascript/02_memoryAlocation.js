// Stack (Primitive) memory alocation
// Primitive Datatype (Copy of variable value): String, Number, Boolean, null, undefined, symbol, bigInt
let myYouTubeName = 'CodeWithRajesh';
let anotherName = myYouTubeName
anotherName = 'IntertainmentWithRaj'

console.log(myYouTubeName);
console.log(anotherName);

// Heap (Non-Primitive) memory alocation
// Non-Primitive Datatypes (Reference of variable value): Object, Array, Function

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

userTwo.name = "Songara"
console.log(userOne);
console.log(userTwo);