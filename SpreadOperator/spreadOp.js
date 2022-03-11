/* 
Spead Operator (..) : Takes individual elements from an array and performs operations 0n all iterables except Objects i.e... Arrays, Strings, Maps, Sets
Uses : 
1.When building an Array or Passing values to a function
*/

const arr = [5, 6, 7];
const badnewArray = [1, 3, 4, arr[0], arr[1], arr[2]];
console.log(badnewArray); // [ 1, 3, 4, 5, 6, 7 ]

//Using Spread OP :
const newArray = [1, 3, 4, ...arr];
console.log(newArray); // [ 1, 3, 4, 5, 6, 7 ]
console.log(...newArray); // 1 3 4 5 6 7

//Copy Array :
const evenNo = [2, 4, 6, 8];
const num = [...evenNo];
console.log(num); // [ 2, 4, 6, 8 ]

//Join Arrays :
const n1 = [1, 2, 3, 4];
const n2 = [5, 6, 7, 8];
const n = [...n1, ...n2];
console.log(n); // [  1, 2, 3, 4,5, 6, 7, 8 ]

// STRINGS :

const str = "name";
const ex = [...str, "sake"];
console.log(ex); // [ 'n', 'a', 'm', 'e', 'sake' ]
console.log(...ex); // n a m e sake

// OBJECTS : Works Since 2018

const obj = {
  name: "Abc",
  age: 25,
};

const person = { Date: "25th March", ...obj };
console.log(person); // { Date: '25th March', name: 'Abc', age: 25 }

person.name = "Xyz";
console.log(obj.name, person.name); // Abc Xyz
