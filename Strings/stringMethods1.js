/////// STRINGS /////

const strName = "stringnames";
console.log(strName[0]); //s
console.log(strName[1]); //t

console.log("name"[0]); //n

//// INDEX METHOD /////

//indexOf method : Returns index of first occured element
console.log(strName.indexOf("s")); //0

//lastIndexOf method : Returns index of last occured element
console.log(strName.lastIndexOf("s")); //10

//we can also search index of words
const str = "My Name is Khan";
console.log(str.indexOf("Name")); //3

//// SLICE METHOD /////

//slice : To extract a substring from a string , Doesn't change Orginal String, always returns new string, indexOf method is useful here

console.log(str.slice(3)); //Name is Khan

//Begin and End Parameter :
console.log(str.slice(3, 7)); //Name , stops executing before reaching 7

//Extract first word : Begin and End Parameter :
console.log(str.slice(0, str.indexOf(" "))); //My

//Extract last word : Begin and End Parameter
console.log(str.slice(str.lastIndexOf(" ") + 1)); //Khan

//Extracting from End :
console.log(str.slice(-1)); //n
console.log(str.slice(-4)); //Khan

// Start and end in between :
console.log(str.slice(0, -4)); //My Name is
