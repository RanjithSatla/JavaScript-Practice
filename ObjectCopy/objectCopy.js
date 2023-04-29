/**
 * Deep Copy in Objects : 3 methods.
 * 1. Spread Operator : Doesn't work for values in nested objects.
 * 2. Object.assign() method : Doesn't work for values in nested objects.
 * 3. JSON.stringify, JSON.parse : Complete Deep copy.
 */

// 1. Spread Operator :

const p1 = {
  name: "Ranjith",
  age: 26,
  address: {
    city: "Hyderabad",
  },
};

const p2 = { ...p1 };

p2.age = 25;
console.log(p1.age, p2.age); // 26 25

// Doesn't mutate the original object Hence Deep copy is achieved.

//////////////////////////////////////////////////////////////////////////////

// 2. Object.assign() : Old , used before spread operator.

const p3 = Object.assign({}, p1);
p3.age = 30;
console.log(p1.age, p3.age); // 26 30

//////////////////////////////////////////////////////////////////////////////

//Pitfall : Deep copy doesn't work on changing the values of nested objects.

p2.address.city = "mahabubnagar"; // Changes for both the objects

console.log(p1.address, p2.address); // {city: 'mahabubnagar'} {city: 'mahabubnagar'}
console.log(p3.address); // {city: 'mahabubnagar'} => Referencing to P1

//////////////////////////////////////////////////////////////////////////////

// Solution : JSON.parse & JSON.stringify

const p4 = JSON.parse(JSON.stringify(p1));

p4.address.city = "Nagarkurnool";
console.log(p1.address.city, p4.address.city); // Mahabubnagar, Nagarkunrool
