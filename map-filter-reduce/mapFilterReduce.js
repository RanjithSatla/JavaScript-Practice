// Max num from an array :

const arr = [1, 2, 3, 6, 4, 5];

const maxNum = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }

  return acc;
}, 0);

console.log(maxNum); // 6

const users = [
  { firstName: "Ranjith", lastName: "Satla", age: "26" },
  { firstName: "Rithesh", lastName: "Macom", age: "23" },
  { firstName: "Vishnu", lastName: "Palakolanu", age: "25" },
  { firstName: "Ramesh", lastName: "Rathod", age: "25" },
  { firstName: "Lokesh", lastName: "Pere", age: "25" },
  { firstName: "Amalu", lastName: "Sajeev", age: "24" },
];

//Full Name :

const fullName = users.map((user) => user.firstName + " " + user.lastName);

console.log(fullName);

// No of people with same age : { '24': 2, '25': 3, '26': 1 }

const sameAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(sameAge);

//First Name of people whose age is above 23 :

const ageG23 = users
  .filter((user) => user.age > 23)
  .map((user) => user.firstName);
console.log(ageG23);

const output = users.reduce(function (acc, curr) {
  if (curr.age > 23) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);
