//////// DATA TYPES - 7 //////
 `
 1.Numbers : Basically Floating Nos.
Ex: let age = 23; // Here 23 = 23.0 in actual.

2.String : Sequence of characters, used for text, enclosed in single/double quotes
Ex: let name = "Donald Trump"

3.Boolean : logical Type , Either True or False, used for taking decisons.
Ex: let oldAge = true;
 
4.Undefined : Value taken by a variable not defined yet, declared but not initialised, empty value.
Ex: let children;
console.log(children); // undefined

5.Null : Empty value but used in different circumstances.

6.Symbol: ES2015, defines a value that is unique and cannot be changed.

7.BigInt : ES2020, Larger integers than Nos can hold.
 `


// typeof Operator : Returns the datatype of the variable.
let jsIsFun = true;
console.log(typeof(jsIsFun));  // boolean
console.log(typeof(23));  //number
console.log(typeof("Donald Trump"));  //string



///// Dynamic Typing in JS ///////

/*
DYNAMIC TYPING : JS automatically determines the datatype of a value that is stored into a variable.
-> In JS, Value has a type not the variable.
-> So that we can assign a new value to the same variable with different datatype, don't use let to redefine.
Ex :  jsIsFun = false;
console.log(jsIsFun);  // false
*/

let year;
console.log(year);   // undefined
console.log(typeof(year));  // undefined , ie.., both value and type is undefined.


year = 2022;
console.log(year);   // 2022
console.log(typeof(year));  // number


//type of Null
console.log(typeof(null));  // object , bug it should show null.


//// Assignments //////

/* 
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

*/

let isIsland = false;
let language;

let country = "India";
let continent = "Asia";
let population = 131000000;

// console.log(typeof(isIsland,language,country,continent,population)); // Shows only last values type ie.., number

console.log(typeof(isIsland));
console.log(typeof(language));
console.log(typeof(country));
console.log(typeof(continent));
console.log(typeof(population));



 
//// Declaring Variables /////

/* 
1.let : ES6, to mutate a variable, can declare a var and later assign the value and reassin the value, mostly used.



2.const : ES6, value of declared variable can't be changed,
Ex: const birthYear = 1997;
     birthYear = 1998;  // TypeError: Assignment to constant variable.


    
3.var : old, can mutate.
Ex: var job = "programmer";
        job = "teacher"   // works.

*/

          


