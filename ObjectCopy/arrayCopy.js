// Arrays :

/**
 * Same as objects so we can use spread operator.
 */

const a1 = [1, 2, 3, 4, 5, [6, 7, 8]];

let a2 = [...a1];

a2[1] = 6;
// console.log(a1[1], a2[1]); // 2  6 => Deep copy.

////////////////////////////////////////////////////////////////////////

// Pitfall : Same as objects ==> Doesn't work for nested arrays

a2[5][0] = 9;
// console.log(a1[5], a2[5]); // [9, 7, 8] [9, 7, 8] => Shallow copy

/////////////////////////////////////////////////////////////////////////
// Solution : JSON.parse, JSON.stringify

let a3 = JSON.parse(JSON.stringify(a1));

console.log(a1, a3);
a3[5][0] = 10;
console.log(a1[5], a3[5]); // [9, 7, 8] [10, 7, 8]
