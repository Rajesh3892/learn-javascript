"use strict";

// alert("hello") // not use in nodeJs

// Primitive DataTypes
// numbers -> 2 to power 53
// bigInt
// null -> standalone value (type is Object)
// symbol -> it identify uniqueness between component. it mostly uses in reactJs

let valueOne = Symbol("123")
let valueTwo = Symbol("123")
console.log(valueOne == valueTwo);