/* 
    NOTE: Object can be declaire in 2 types 
    1. Constructor (obj = Object.create)=> When we create Object using Constructor then Singleton Object will be created and
    2. Literal ( obj = {} )=> When we create Object using Literal then it will generate multiple instances
*/

// Create 'Symbol'
const mySymbol = Symbol('key1')

// Create Literal Object
let obj1 = {name:'John', age:30, [mySymbol]: true}
// console.log(obj1) // Output : { name: 'John', age: 30, Symbol(myKey): true }
// console.log(obj1[mySymbol]) // Output : true
/*
    Here when you try to access the property which is not present in object literal then it will give error because of strict mode.
    In above example when we try to access the property with symbolic key it gives undefined because object literal does not support symbols as a key value pair.
*/

const student = {
    name: 'Rajesh',
    age: 30,
    'full name' : 'Rajesh Songara',
    location: 'Pali',
    email: 'rajesh@google.com',
    isLoggedIn: false,
    [mySymbol]: "myKey" 
}

//Basic Method: Accessing value by dot notation
// console.log(student.name); //Output: Rajesh

//Advanced Method: Accessing Value By Bracket Notation
// console.log(student['name']) // Output : Rajesh
// console.log(student[mySymbol]); // Output: myKey
// console.log(student['full name']); //Output: Rajesh Songara

//Accessing Value Using Dynamic Key Name
const keyName = "age";
// console.log(student[keyName]); // Output : 30

//Accessing Value Using Computed Property Names
const propName = "isLoggedIn"
// console.log(student[propName]); // Output : false

//================ Freeze Object ================
// Object.freeze(student);
try{
    student.age=45;
}catch(err){
    console.error("Error Occurred", err);
}
// console.log(student); // Output : { name: 'Rajesh', age: 30, full name: 'RajeshSongara', location: 'Pali', email: 'rajesh@google.com', isLoggedIn: false, Symbol(myKey): 'myKey' }

// =======================Add Function in the Object========================
student.greetings = function(){
    // console.log("Hello how are you?");
}

// console.log(student.greetings); // Type1: this will function return back not function execute
// console.log(student.greetings()); // Type2: function executed, Output: 'Hello how are you?'

// When we reference of same object to access/get specific value
//Method 1:
student.greetingsTwo = function(){
    // console.log(`Hello ${this["full name"]} how are you?`)
}
// console.log(student.greetingsTwo()); // Type2: function executed, Output: 'Hello Rajesh Songara how are you???'

//Method 2:
function getFullName(){
    return `${this.firstName} ${this.lastName}`; // "this" keyword use for reference value of the same object 
}
const person={
    firstName:"John",
    lastName:"Doe",
    getFullName:getFullName
};
// console.log(person.getFullName()); // Output: John Doe


//================ Object.assign========================
let objA = {a: 1, b: 2};
let objB = {b: 3, c: 4};
// Object.assign(targetObject, sourceObject) => Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
Object.assign(objA, objB); //
// console.log(objA); // Now objA is { a: 1, b: 3, c: 4 }
const objC = Object.assign({}, objA, objB) // Here target Object is {}
// console.log(objC); // Now objA is { a: 1, b: 3, c: 4 }


//===================Object.values() and Object.entries()=====================
const personObj = {name:'John', age:30, city:'New York'};
// console.log(Object.values(personObj)); // ['John', 30, 'New York']
// console.log(Object.entries(personObj)) // [['name','John'], ['age',30], ['city','New York]]

//===================Deep Copy================================
let DeepObj = JSON.parse(JSON.stringify({x:{y:{z:1}}}));
// console.log(DeepObj); // Output: { x: { y: { z: 1 } } }

//===================Rest Parameter========================
function myFunction(...args) {
    // console.log(args); // Output: ['first', 'second']
    // console.log(args[0]); // Output: Hello World!
}
myFunction('first', 'second');

//===================Default Parameters========================
function greet({name="World"}){
    console.log(`Hello, ${name}`);
}
// greet({}); // Hello, World
// greet({name:'John'}); // Hello, John

//=================== Object Destructuring Assignment ========================
// Method-1
let objNumber = {"one":1,"two":2,"three":3};
let {one, two:c} = objNumber;
// console.log(one); // one
// console.log(c); // three
// Method-2
let o = {p: 42, q: true};
({p: o.x, q: o.z} = o);
// console.log(o); // { p: 42, q: true, x: 42, z: true }


//=================== Option Chaining nexted object ======================
let user = {
    name: "John",
    address: {
        street: "5th Avenue",
        city: "New York",
        country: "USA"
    },
    email: "john@example.com"
};
// console.log(user.address.country); // USA
// console.log(user.address?.country); // Option Chaining




// ====================== Other example ===================
const userDetail = {
    userId : "123abc",
    fullName : () => `${this.userId}-${this.email}`,
    email : "john@doe.com",
    city : 'Pali',
    getUserDetails(){
        return this.fullName();
    }
}
//console.log(userDetail.getUserDetails()); // undefined-undefined  john-john@doe.com


//=================== Promise =====================
let promiseExample = () => {
    let promiseOne = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("Success!"), 500);
    });
    return promiseOne;
}
// promiseExample().then(result=> console.log(result));

