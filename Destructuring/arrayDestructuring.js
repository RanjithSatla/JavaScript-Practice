/*
Destructuring : Unpacking values from an Array or an object
*/

//// ARRAY DESTRUCTURE //////

const arr = [1, 2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3

const [a, , b, c] = arr; // Follows order of Elements in arr
console.log(a, b, c); // 1 3 4

//Nested Destructuring
const nested = [6, 7, [8, 9]];
const [i, j, k] = nested;
console.log(i, j, k); // 6 7 [8 9]
const [p, q, [r, s]] = nested;
console.log(p, q, r, s); // 6 7 8 9 ,

//Setting Default values
// const [e, d, f] = [1, 2];
// console.log(e, d, f); // 1 2 undefined

const [e, d, f = 1] = [1, 2];
console.log(e, d, f); // 1 2 1
