// This refers/points to owner of the fun in which it is called
const person = {
  name: "xyz",
  year: 1997,
  calcAge: function () {
    return 2022 - this.year;
  },
};

console.log(person.calcAge());

const anotherP = {
  year: 1994,
};

anotherP.calcAge = person.calcAge; //method borrowing ,
console.log(anotherP.calcAge()); // calcAge is called by anotherP F , this refers to anotherP.

const calcAge = (birthYear) => {
  console.log(this); // Points to Closest Function known as lexical this
  return 2022 - birthYear;
};
console.log(calcAge(1997));
