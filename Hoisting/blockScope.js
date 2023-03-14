////////  BLOCK  ////////

/*
->  Defined be {}
-> Valid JS statement.
-> Used to group multiple statements together so that they can be used where JS expects single statement. 
 */

// if(true) //SyntaxError: Unexpected end of input.

if (true) true; // Valid. JS expected a statement which we have provided.

if (true) {
  let a = 20;
  console.log(a); //20 // We have combined multiple statements together and used where JS expected a single statement.
}

////////  BLOCK SCOPE    ////////

/*
-> Block scope is a place in block where the variables and functions can be accessed.
*/

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); //10
  console.log(b); //20
  console.log(c); //30
}

console.log(a); //10
// console.log(b); // ReferenceError: b is not defined
// console.log(c);

// Bcoz a is in Global scope and let and const are hoisted inside block scope so once initialised the block scope is removed and cant be accessed inside global scope.

//////    SHADOWING  ////////

var a = 11;
let b = 21; // In script scope.
const c = 31; // In script scope.

{
  var a = 111; // In Global scope shadows when value is initialised.
  let b = 211; // In block scope
  const c = 311; // In block scope
  console.log(a); //111
  console.log(b); //211
  console.log(c); // 311
}

console.log(a); //111: This var 'a' shadows the 'a'in the global scope.
console.log(b); //21
console.log(c); //31
