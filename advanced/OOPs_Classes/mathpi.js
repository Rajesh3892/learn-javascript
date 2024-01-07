// console.log(Math.PI) // 3.141592653589793

const mathDescriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(mathDescriptor);
/* Output= {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false      
}*/
const user = { name: "John", age: 30 }
const userDescriptor = Object.getOwnPropertyDescriptor(user, 'name')
console.log(userDescriptor); // { value: 'John', writable: true, enumerable: true, configurable: true }

// Modify by defineProperty()
// const userDescriptorModify1 = Object.defineProperty(user, 'age', {writable:false})
// const userDescriptorModify2 = Object.defineProperty(user, 'age', {writable:false,enumerable:false})
const userDescriptorModify3 = Object.defineProperty(user, 'name', {writable:false, configurable: true})

// userDescriptorModify1.age = 36;
// userDescriptorModify2.age = 45;
userDescriptorModify3.name = 'Rajesh';
// 
// console.log(userDescriptorModify1); // {name: 'John, age: 30}
// console.log(userDescriptorModify2); // {name: 'John}: enumerable property don't count key-value pair
console.log(userDescriptorModify3); // {name: 'Rajesh', age:30}
