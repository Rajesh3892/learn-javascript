# JavaScript Array Optimization Techniques

## Introduction

In JavaScript, arrays are one of the most fundamental data structures. They are used to store collections of data, and can be accessed and manipulated in a variety of ways. However, as arrays grow in size, their performance can become a concern. This is where array optimization techniques come into play.

## 2 types of Array
- 1. continue 
- 2. holey

## Array Optimization Techniques
JavaScript offers several array optimization techniques that can help improve the performance of your code. These techniques include:

* **Small Integer Optimization (SMI)**: SMI is a technique that optimizes the storage of small integers (numbers between -2^31 and 2^31-1) in JavaScript arrays. SMI-optimized arrays use a more compact representation for these integers, which can save space and improve performance.

* **Packed Element Optimization**: Packed element optimization is a technique that optimizes the storage of elements in JavaScript arrays. Packed element arrays use a more compact representation for elements of the same type, which can save space and improve performance.

* **Double Optimization**: Double optimization is a technique that optimizes the storage of double-precision floating-point numbers in JavaScript arrays. Double-optimized arrays use a more compact representation for these numbers, which can save space and improve performance.

## Example

The following code demonstrates the use of array optimization techniques in JavaScript:

``` javascript
    const myArr = [];
    // %DebugPrint(myArr);

    const arrTwo = [1, 2, 3, 4, 5]; // PACKED_SMI_ELEMENTS
    arrTwo.push(6.0); // PACKED_DOUBLE_ELEMENTS
    arrTwo.push("Rajesh"); // PACKED_ELEMENTS
    arrTwo[10] = 20; // HOLEY_PACKED: ***So HOLES are very expensive in JS

    console.log(arrTwo);

    // NOTE: Once if PACKED_SMI_ELEMENTS changed into another ELEMENT after that it can't be back to PACKED_SMI_ELEMENTS
    // Optimization order from high to low
    // SMI > DOUBLE > PACKED : in CONTINUE
    // H_SMI > H_DOUBLE > H_PACKED : in HOLEY

    // Bound Check of array
    hasOwnProperty(arrTwo, 9)
    hasOwnProperty(arrTwo.prototype, 9)
    hasOwnProperty(Object.prototype, 9)
```