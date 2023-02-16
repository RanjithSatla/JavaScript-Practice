let x = 2;

function getPerson(name) {
  console.log("The person name is", name);
}

getPerson("Ranjith"); // The person name is Ranjith
console.log(x); // 2

/* Closure : During the memory creation phase in Execution context :

i.All the variables hold undefined as the value so when called before intialisation undefined is returned.
ii.In case of functions entire function code is available, So functions return the actual value inside it.
iii.Variable declarations with var keyword is hoisted but let & const are not hoisted because they are in their Temporal Dead Zone.
*/

getBook("Alchemist"); //The book name is Alchemist
console.log(z); // undefined.
// console.log(y); // ReferenceError: Cannot access 'y' before initialization

function getBook(book) {
  console.log("The book name is", book);
}

let y = 2;
var z = 3;

// Arrow Functions :

getFruit("Mango");
const getFruit = (fruit) => {
  console.log("The fruit name is", fruit);
};

/* OP : 
i.var getFruit :
TypeError:  getFruit is not a function. Because now getFruit will have the value undefined attached to it in memory creation phase in EC.

ii.let getFruit / const getFruit : 
ReferenceError: Cannot access 'getFruit' before initialization.
Because let & const are not hoisted because they are in their Temporal Dead Zone. EC has the variables but only saves the value to the variable after the TDZ i.e only after the initialisation.
*/
