/**
 * Deep copying : The values are copied to newly assigned variable and disconnected from the original variable.
 * Shallow copying : The values are copied to new variable and certain (sub)values are still connected to the old variable.
 *
 */

// In Primitive data types : Number, String, Boolean, null, undefined

/**
 * In Primitive data types , when the values are copied they are tightly coupled with the new variable.
 * They forms a real copy.
 */

const a = 5;
let b = a;
b = 6;

console.log(a, b); // 5 6; On reassigning b changes and not a.

// Composite data types : Arrays and Objects.

/**
 * Technically Arrays are also objects. So both behave in same way.
 * In this the values are actually stored once, in assigning it to a new variable just creates a pointer to it.
 * So on changing in one variable, it reflects in other variable too.
 */

const person1 = {
  name: "Ranjith",
  age: 26,
};

const person2 = person1;
person2.age = 25;

console.log(person1.age, person2.age); // 25 25

// Change in person2 mutated person1 - This is called shallow copy.

/**
 * We might need old variable to have original values. Causes problems sometimes.
 */
