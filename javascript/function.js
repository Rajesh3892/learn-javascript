// ================== Rest Operator (...parameter)======================
function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(100, 200, 300)) // Output: [ 100, 200, 300 ]


//=============== Function Hoisting =========================
// console.log(addNumbers()); // Output: Gives ERROR
var addNumbers = function(){
    let sum = 0;
    let arguments = [1,2,3,4,5]
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
};

//============= Arrow functions and this keyword ===============
const person = {
    name : "John",
    age : 36,
    sayHello : () =>{ // Arrow Function
        console.log(`Hi! My name is ${this.name}, I am arrow function`); 
        console.log(this); // will not work, only print in GLOBAL WINDOW OBJECT of BROWSER if use "this" keyword for the DOM  
    },
    sayGoodbye : function(){ // Normal Function
        let price = 99
        console.log(`Hi! My name is ${this.name} I am normal function ${this.price}`); // "this" keyword access the content of object not function so this.name will print but this.price gives "undefined" value
        console.log(this); // "this" keyword will print scope content
        console.log("Bye!");
    }
}
// console.log(this); // Prerquisite: will print {} object in Node environment and GLOBAL WINDOW OBJECT of BROWSER for DOM
// person.sayHello(); // Hi! My name is, Note: "John" will not print because of this keyword not work inside of arrow function
// person.sayGoodbye(); // Bye!

//========================= Explicit and Emplicit Scope ======================
const explicitReturnFunction = () => {
    return true; // Explicit Return
}

//Emplicit method: in this method curly brackets does not use
// Method-1: Without () paranthesis
// const implicitReturnFunction = (num1 , num2) => num1 + num2

// Method-2: With () paranthesis
// const implicitReturnFunction = (num1, num2) => (num1 + num2)

//Method-3: if return object using emplisit  
const implicitReturnFunction = (num1, num2) => ({result: num1 + num2});
// console.log(implicitReturnFunction(5, 6));


//============ Immediately Invoked Function Expression (IIFE) ===================
// Note: That function which immediately invoke and remove problem/polution of functions or variables of global scope. IIFE has access the global variables but cannot change. 
(function iifeFunction(){
    console.log('This is unnamed IIFE');
})();

((name) =>{
    console.log(`Hello ${name}, This is named IIFE`);
})('Rajesh')


