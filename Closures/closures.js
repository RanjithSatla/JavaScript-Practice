///// CLOSURES ////

/* Closure : Closure is the closed-over variabale environment of the execution context, even after that execution context is gone.

2. A closure gives a function access to all the varibles of its parent function, even after that parent function has returned.The function keeps a refernce to its outer scope, which preserves the scope chain throughtout the time.

3. A closure makes sure that a function doesn't loose connection to variables existed at the functions birth place.

4. A closure is like a backpack that a function carries around whereever it goes. This backpack has all the variables that were present in the environment where the function was created.

5.A function along with its lexical scope bundled together forms closure.
*/

function x() {
  let a = 7;

  return function y() {
    console.log(a);
  };
}

let z = x();
console.log(z); //[Function: y]

z(); //7

/* Now the function x and y are done with execution and removed out of EC. But the function returned has lexical scope bundled together when it is returned which has access to the variable a. */
