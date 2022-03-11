//// OBJECT DESTRUCTURE //////

const student = {
  name: "Suhas",
  age: 25,
  job: "Developer",
};

const { name, job, age } = student; // Order does'nt matter in obj dest
console.log(name, job, age); // Suhas Developer 25

//Change Property Names;
const { name: studentName, job: studentJob, age: studentAge } = student; // {old PropName : newPropName}

console.log(studentName, studentJob, studentAge); // Suhas Developer 25

//Default Values :

const { name, job, age, location = "HYD" } = student; // {propName = defValue}
console.log(name, job, age, location); //Suhas Developer 25 HYD

//Mutating Variables;

let a = 1;
let b = 2;

const obj = { a: 3, b: 4, c: 5 };
//const {a,b} // Error as Already a,b are declared
//let {a,b} // Creates new variables
//{a,b} = obj; //SyntaxError: Unexpected token '='

({ a, b } = obj);
console.log(a, b); //3 4

//Nested Destructure

const newObj = {
  name: "Raj",
  profDetails: {
    job: "DevOps Engineer ",
  },
};

const {
  name,
  profDetails: { job },
} = newObj;
console.log(name, job); //Raj DevOps Engineer
