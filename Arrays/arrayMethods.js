/* 
Arrays : Arrays are also objects in JavaScript, So it has built-in methods attached to it.
*/


//////  PUSH METHOD //////

//Push : Add elements to the end of the array, returns the length of the new array.

const fruits = ["mango", "banana", "pine apple"];
let newLength = fruits.push("grapes");
fruits[0] = "Strawberry"
console.log(newLength);    //4
console.log(fruits);      // [ 'mango', 'banana', 'pine apple', 'grapes' ]



//////  UNSHIFT METHOD //////


//Unshift : Adds an element to the begining of an array.

fruits.unshift("guava");
console.log(fruits);  // [ 'guava', 'Strawberry', 'banana', 'pine apple', 'grapes' ]




//////  POP METHOD //////

//Pop : Removes last 



//////  SLICE METHOD //////

// Slice : To extract a substring from a string , Doesn't mutate Orginal String, always returns new string, indexOf method is useful here. Used to create shallow copy of an array.

let arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.slice(2)); // [ 'c', 'd', 'e', 'f' ]
console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-2)); // [ 'e', 'f' ]
console.log(arr.slice(1, -2)); // [ 'b', 'c', 'd' ]
console.log(...arr); // a b c d e f

//////  SPLICE METHOD //////

// Splice : Same as Slice method but the Original array mutates.

// console.log(arr.splice(2)); // [ 'c', 'd', 'e', 'f' ]
// console.log(arr); // [ 'a', 'b' ] , Extractred elements are gone.

arr.splice(-1); // Remove last element.
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

arr.splice(1, 2); // arr.splice(start,deleteCount)
console.log(arr); // [ 'a', 'd', 'e' ] , b c - 2 deleted.

//////  REVERSE METHOD //////

//Reverse : Reverses the the array in original array.So the original array mutates.

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2); // [ 'f', 'g', 'h', 'i', 'j' ]

//////  CONCAT METHOD //////

//Concat : Concatenate two arrays.Doesn't mutate original array

const letters = arr.concat(arr2);
console.log(letters);
/*[
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j'
  ] */

console.log(...arr, ...arr2); // a b c d e f g h i j

//////  JOIN METHOD //////

//Join : Joins arrays with the seperator we specify.

console.log(letters.join("-")); // a-b-c-d-e-f-g-h-i-j
