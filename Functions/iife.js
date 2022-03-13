///// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ////

/* IIFE : IIFE are functions thar are executed only once in the program 
-> They are executed immediately without saving.
-> Can use to encapsulate variables , to run functions only once so that no other part of the code can change this code.
*/

const runOnce = function () {
  console.log("This will only run once");
};
runOnce(); //This will only run once but this can be called again.

// function() {
//     console.log("This will only run once"); //SyntaxError: Function statements require a function name
// }

// Should make the function as a expression using wrapping using () and then call  the function.

(function () {
  console.log("This will never only run once");
})(); //This will never only run once

//NOTE : Outer Scope cannot access inner scope.

// Encapsulation :

(function () {
  console.log("This will never only run once");
  const private = 23;
})();

// console.log(private); //ReferenceError: private is not defined

{
  const privateVar = 23; // Now we can encapsulate by declaring in block in ES6 without the use of IIFE.
  var privateVarr = 43;
}

// console.log(privateVar); //ReferenceError: privateVar is not defined , Const Block scoped.
console.log(privateVarr); //
