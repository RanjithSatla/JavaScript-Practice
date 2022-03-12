//// LOWERCASE &UPPERCASE METHODS //////

const str = "SAIMON";
console.log(str.toLowerCase()); //saimon
console.log(str[0] + str.slice(1).toLocaleLowerCase()); //Saimon

//Comaparing EMails :
const email = "sanju@gmail.com";
const loginEmail = " Sanju@gmail.Com ";
const normalisedEmail = email.toLowerCase().trim();
console.log(normalisedEmail); //sanju@gmail.com

//REPLACE :
const name = "my name iz khan";
const rname = name.replace("z", "s"); //.replace(existing char, replace char)
console.log(rname); //my name is khan

//words:
const entrance = "There are two doors on front and two gates on back";
console.log(entrance.replace("door", "gate")); //There are two gates on front and two gates on back

//BOOLEANS :
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); //true
console.log(plane.includes("Boeing")); //false
console.log(plane.includes("Airb")); //true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("part of new airbus family");
}
//part of new airbus family
