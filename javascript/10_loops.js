// ==================== (for of) loop =========================
// 1) For Array 
let arr = [1,2,3,4,5]
for (const val of arr) {
    // console.log(val); // It return values: 1,2,3,4,5
}

// 2) For String
let str = "Hello World"
for (const char of str) {
    if (char == " ") {
        continue;
    }
    // console.log(char); // it return values: "H", "e", "l"
}

// 3) For Map Object
let map = new Map();
// map.set('aa', 1).set('bb', 2).set('cc', 3); // use set 1-type 
// use set 2-type
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
// console.log(map); // ['a', 1], ['b', 2], ['c', 3]
for (const [key, value] of map) {
    // console.log(`Key: ${key}, Value: ${value}`);
}

// 4) For Object: "for of" loof not use for object
let obj = {name: 'John', age: 30};
// for (const key of obj) {
//      console.log(`Key: ${key}, Value: ${obj[key]}`); // Object is not iterable
// }


// ==================== for in loop =========================

// 1) For Object
let userObj = {name: 'John', age: 30, city: "Pali"};
for (const key in userObj) {
    // console.log(`Key: ${key}, Value: ${userObj[key]}`); // Object is not iterable
}

// 2) For Array
const programming = ['js', 'c++', 'ruby', 'node', 'reactjs']
for (const lang in programming){
    // console.log(`Index: ${lang}, Language: ${programming[lang]}`);
}

// 3) For Map Object: "for in" loop not work for Map Object
let mapObj = new Map();
mapObj.set('a', 1).set('b', 2).set('c', 3); // use set 1-type 
for (const [key, value] in map) {
    // console.log(`Key: ${key}, Value: ${value}`);
}

// ==================== ForEach Loop =======================
// 1) For Array
const fruit = ["apple", "banana", "cherry"];
fruit.forEach((item, index, iterate) => {
    // console.log(`Item: ${item}, Index: ${index}`);
    // console.log(iterate);
});
// 2) For Set Object
const mySet = new Set(['red','blue','green', 'orange']);
mySet.forEach((val)=>{
    // console.log(`Value: ${val}`);
})
// 3) For Map Object
let mapForEach = new Map([['a', 1], ['b', 2], ['c', 3]]);
mapForEach.forEach((value, key, iterate) =>{
    // console.log(`Key: ${key}, Value: ${value}`);
    // console.log(iterate);
});

// 4a) For Function type-1
function printArrayElements(arr){
    arr.forEach((element, index, array) => {
        // console.log(`Element: ${element}, Index: ${index}`);
        // console.log(array);
    });
}
printArrayElements(["apple","banana","cherry"]);

// 4b) For Function type-2
const basket = ["apple","banana","cherry"]
function printArrayElementsOutSide(arr){
    // console.log(arr);
}
basket.forEach(printArrayElementsOutSide);

// 5a) Store value in forEach loop
const numbers = [10, 20, 30];
const values  = numbers.forEach((num, i, ary) => {
    // console.log(num)
    return num // Note: forEach function does not return any value but filter function return values
});
// console.log(values); // Output: undefined

// 5b) Store value in forEach loop
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
const newArray = []
numbersArray.forEach((num, i, ary) => {
    if (num % 2 === 0 ) {
        newArray.push(num);
    }
});
// console.log(newArray); // Output: [2,4,6,8]


// ==================== Filter Function ====================
// 1) Filter Array Elements using Arrow Function
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
const filteredFruits = fruits.filter((fruit) => fruit === 'Apple');
// console.log(filteredFruits); // Output: Apple

// 2) Filter Array Elements using Regular Expression
const animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger", "Andrew"];
const animalNamesStartingWithAorAn = animals.filter((name) => /^[aA]/.test(name));
// console.log(animalNamesStartingWithAorAn); // Output: ['Andrew]

// 3) Filter Array Elements using scope function
const numArray = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numArray.filter((number) => {
    return number % 2 === 0 
});
// console.log(evenNumbers)


// ==================== Map Loop =========================
// 1) Use map to double the elements of an array
const arrNum = [1, 2, 3, 4, 5];
const resultArr = arrNum.map((element) => element * 2);
// console.log(resultArr); // Output: [2, 4, 6, 8, 10]

// 2) Create a string from all the words in an array and capitalize in sentance case.
const strWords = ['hello', 'Rajesh', 'welcome', 'to', 'the', 'world'];
const sentence = strWords.join(' ') + '.';
let capSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
// console.log(capSentence); // Output: Hello Rajesh welcome to the world.

// 3) Use map with object and arrow function
const personList = [{ name: "John" }, { name: "Jane" }, { name: "Tom" }];
const fullNameList = personList.map((person) => ({ ...person, fullName: `${person.name} Doe`}));
// console.log(fullNameList); // Output: [{"name":"John","fullName":"John Doe"}, {"name":"Jane","fullName":"Jane Doe"}, {"name":"Tom","fullName":"Tom Doe"}]

// 4) Map chaining function
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 40)
console.log(newNums);

// =============== reduce function ====================
// 1) Reduce sum of array elements
const numbersReduceArray = [1, 2, 3, 4, 5];
const totalSum = numbersReduceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(totalSum); // Output: 15

// 2) Find maximum value in an array
const maxNumber = numbersReduceArray.reduce((maxVal, curVal) => Math.max(maxVal, curVal), -Infinity);
// console.log(maxNumber); // Output: 5

// 3) Check if any duplicate values exist in an array
const isDuplicateExist = (arr) => arr.length !== new Set(arr).size;
const hasDuplicates = isDuplicateExist([...numbersReduceArray]);
// console.log(hasDuplicates); // Output: false

// Using Scope {}
const total = numbersReduceArray.reduce(function(acc, currentValue){
    acc += currentValue;
    return acc;
}, 0);
// console.log(total);

//==================== Flatten nested arrays ====================
function flattenDeep(arr){
    let flat = [];
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if(Array.isArray(item)){
            flat = [...flat, ...flattenDeep(item)];
        } else {
            flat.push(item);
        }
    }
    return flat;
}
const deepArr = [[1], [2, [3]], 4, [5]];
const resultFlattened = flattenDeep(deepArr);
// console.log(resultFlattened);