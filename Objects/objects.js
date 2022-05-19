//Object literal Syntax :

const lokesh = {
    firstName : "Lokesh",  // Propert : Value
    lastName : "Pere",
    job : "Developer",
    friends : ["Sanjay","Vishwa"],
}



/////  Accessing Objects //////

// 1. Dot Notation : 

console.log(lokesh.firstName); //Lokesh

const nameKey = "Name";
// console.log(lokesh.first` + nameKey) //Error : Computation in Bracket notation is not allowed.




//2. Bracket Notation : 

console.log(lokesh["firstName"]); //Lokesh

console.log(lokesh[`first` + nameKey]); //Lokesh , ie.., Computation in Bracket notation is allowed.


////// Adding Properties to an Object //////

lokesh.location = "Hyderabad";
lokesh["interestedIn"]  = "Movies";
console.log(lokesh);

//Challenge :

console.log(`Lokesh has ${lokesh.friends.length} friends.And his best friend is ${lokesh.friends[0]}`);  // Lokesh has 2 friends.And his best friend is Sanjay



//Object Methods : 

const ramesh = {
    firstName : "Lokesh",  // Propert : Value
    lastName : "Pere",
    birthYear : 1999,
    job : "Developer",
    friends : ["Sanjay","Vishwa"],
    license : true,
    calcAge : function() {
        this.age = 2022-this.birthYear;
        return this.age;
    },
    summary : function() {
        console.log(`${this.firstName} is ${this.calcAge()} years old and he has ${this.license ? "a" : "no" } driving license`);
    }
}
ramesh.calcAge();
console.log(ramesh);
console.log(ramesh.age);
ramesh.summary();

