const myArray = [0,1,2,3,4,5]

//add element to starting point and shift all element to next position in original 
myArray.unshift(9)  // Output: [ 9, 0, 1, 2, 3, 4, 5 ] 
// console.log(myArray)

// remove the starting element of an original array
myArray.shift()  // Output: [ 1, 2, 3, 4, 5 ]
// console.log(myArray)

/* 
    splice() method can be used in two ways,
    splice() method changes the content of  an original array by removing or replacing existing elements AND/OR adding new elements in place. 
*/

let arry1=[1,2,3,4,5];

// 1) splice(startIndex, noOfElementTobeDeleted): In this methos original array will be changed. It deletes 2 elements from index 2 (it means after deleting we have 3 elements in original array)
let numArray = arry1.splice(2,2);   
// console.log("Original array after deletion ",arry1); // Output: [1,2,5]
// console.log("deleted slices from array",numArray); // Output: [3,4]


// 2a) splice(startIndex, deleteCount, itemToAdd): let's say we want to insert a new value at index 2
const arra2= arry1.splice(2,0,"A");
// console.log("after insertion in original Array",arry1); // Output: [1,2,'A',3,4,5]
// console.log('Deleted array of splice with A', arra2) // Output: [] => Because of 0 elements to be deleted


// 2b) splice(startIndex, deleteCount, multipleItemsToAdd): It will only return deleted items
let newArr=[1,2,3,4,5];
let delItems=newArr.splice(2,0,'a','b');    // here we are passing no item to add so it
// console.log('Original Array after inserting', newArr); // Output: [1,2,'a','b']
// console.log('Deleted', delItems); // Output: [3,4,5]

//slice(): returns a shallow copy of elements from start till end
let arry3=[1,2,3,4,5];
let slicedArr=arry3.slice(1,3); // Do not change in original array
// console.log("Original array after slicing",arry3); // Output: [1,2,3,4,5]
// console.log("Slicing an array: ",slicedArr); // Output: [2,3]


//================= Add Multiple arrays ======================
const basketOne = ['apple', 'banana', 'Lichi'];
const basketTwo = ['Pinapple', 'Watermelon', 'kiwi', 'mango']

// push() Method:

//add one or more elements to the end of array
basketOne.push('cherry');   //Output: ['apple', 'banana', 'Lichi'] 
// console.log(basketOne);
basketOne.push(basketTwo); // you can also push another array into existing array. But it push array2 into array not every elemet of array2 
// console.log(basketOne); // Output: ['apple', 'banana', 'Lichi', ['Pinapple', 'Watermelon', 'kiwi', 'mango']]

// concate(): Combines two or more arrays. This method returns a new array without modifying any existing arrays. 
const fruits = basketOne.concat(basketTwo);
// console.log(fruits); // Output: ['apple', 'banana', 'Lichi', 'Pinapple', 'Watermelon', 'kiwi', 'mango']

// spread operator ... : It allows an iterable (like an array or string) to be expanded in places where zero or more arguments are expected
const bigBasket = [...basketOne,...basketTwo] // used in ES6 version
// console.log(bigBasket); // Output: ['apple', 'banana', 'Lichi', 'Pinapple', 'Watermelon', 'kiwi', 'mango']

//================= Remove from arrays ======================
const removeFruit = (basketTwo, fruitName) => {
    const index = basketTwo.indexOf(fruitName);
    if (index !== -1){
        basketTwo.splice(index, 1);
        // console.log(basketTwo);
    } else{
        console.log(`${fruitName} not found`);
    }
}
removeFruit(basketTwo, 'mango')

//++++++++++++++++++++++++++ depth sub-array++++++++++++++++++
let arrDepthSubArray = [[1,2],[3,4]];
// console.log(arrDepthSubArray[0][1]); // Output: 2

const arrDepthSubArray2 = [1,2,3,[3,4,[5,7,8]],[5,6]];
// console.log(arrDepthSubArray2[3][2]); // Output: [5,7,8]

const arrDepthSubArrayOut = arrDepthSubArray2.flat(Infinity)
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(arrDepthSubArrayOut); // Output: [ 1, 2, 3, 3, 4, 5, 7, 8, 5, 6 ]

//=================== Convert string into array ==================
const strToConvert = "HelloWorld";
const checkArray = Array.isArray(strToConvert) // Output: False

const convertedString1 = String(strToConvert).split(""); // Output: [ "H", "e", "l", "l", "o", "W", "o", "r", "l", "d" ]

// Creates an array from an iterable object.
const convertedString2 = Array.from(strToConvert) // Output: [ "H", "e", "l", "l", "o", "W", "o", "r", "l", "d" ]

//============= Use 'of' keyword instead of 'from'================
const score1 = 100;
const score2 = 90;
const score3 = 80;
// Returns a new array from a set of elements.
const scoredArray = Array.of(score1,score2,score3) //Output: [100,90,80]

//================= Change Object to Array ====================
const person = {name:"John", age: 30};
const personAsKeys = Object.keys(person); // Output: ["name", "age"]
const personAsValue = Object.values(person); // Output: ["John", 30]
const personAsEntries = Object.entries(person)
// console.log(personAsKeys);
// console.log(personAsValue);
console.log(personAsEntries);
const personAsArray2 = Array.from(person); // Output: []
//Empty because there are no enumerable properties on that object

//===================Array Destructuring Assignment========================
let arrNumber = ["one","two","three"];
let [a, c] = arrNumber;
console.log(a); // Output: one
console.log(c); // Output: two