/// Type Conversion : Converting manually from one datatype to another

const n1 = "23";
const n2 = 20;
console.log(n1 + n2); //2320

console.log(Number(n1) + n2); //43 ie.., Number fun converted string to num.

const s1 = 23; // 23 as a num
console.log(String(23)); // 23 which is converted to a String here.

console.log(Number("asd")); // NaN
console.log(typeof NaN); // Number

/// Type Coercion : JS internally converts one datatype to another.

/*
==> String plus Number = String
==> Number plus Number = Number
==> String plus String = String
*/
console.log("Iam" + "working" + "in" + "FloorNo" + 3); //IamworkinginFloorNo3 , ie.., Here 3 is converted into string.

const n3 = "5",
  n4 = 6;
console.log(n3 + n4); //56
console.log(n3 - n4); //-1, ie.., n3 is converted to num.

/* Here, JS converts n3 to number and performs the operation.
==> string minus number = number
*/

//Falsy Values : FIVE => 0 , Null, " ", Undefined, false.

let height = 0;

if (height) {
  console.log("Height Provided by the user");
} else {
  console.log("Height not provided by the user");
}

//OP : Height not provided by the user ; Weird case which caused  due to type coercion as O is a falsy value.

/*
/// Continue and Break  ////

Continue : Continue keyword in looping stops the current iteration and continue with the next iteration.
Break    : Break Keyword in looping terminates the looping completely.

*/

const person = ["John", "Ivanka", 33, "USA"];

//Log only strings :

for (let i = 0; i < person.length; i++) {
  if (typeof person[i] != "string") continue;
  console.log(person[i]); // John  Ivanka  USA
}

for (let i = 0; i < person.length; i++) {
  if (typeof person[i] == "number") break;
  console.log(person[i]); // John Ivanka
}
