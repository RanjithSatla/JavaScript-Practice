////// SPLIT METHOD & JOIN METHOD : //////

// Split : Takes a condition and splits the string and stores the result in an array.

const str = "I+am+a+good+guy";
console.log(str.split("+")); // [ 'I', 'am', 'a', 'good', 'guy' ]

const string = "Jack of all";
console.log(string.split(" ")); //[ 'Jack', 'of', 'all' ]

//Join : Opp of Split method.

const name = "Anudeep Durisetti";
const [firstName, lastName] = name.split(" ");

const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName); //Mr. Anudeep Durisetti

///// PADDING METHOD : //////

//Padding : Adds our condition to the string to make it the length we desired.

const fellow = "Stupid fellow";
console.log(fellow.padStart("15", "+")); // ++Stupid fellow ; Length 15
console.log(fellow.padEnd("25", "+")); // Stupid fellow++++++++++++ ; Length 25 most Stupid

//Realtime Example :
const creditCard = 256256245662;
const conStr = creditCard + ""; //converts to string
const last = conStr.slice(-4);
const maskCredit = last.padStart(conStr.length, "*");
console.log(maskCredit); //********5662

///// REPEAT METHOD : //////

const ex = "Myself";
console.log(ex.repeat(3)); //MyselfMyselfMyself
