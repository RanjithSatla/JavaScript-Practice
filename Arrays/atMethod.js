////// AT METHOD //////

// at : To get elements at specified position , new method introduced in ES6 2022. Words on both numbers and strings

const arr = [21, 45, 65];
console.log(arr[0]); // 21
// console.log(arr.at(0));  // 21

//Getting last element traditionally :

console.log(arr[arr.length - 1]); // 65
console.log(arr.at(-1)); // 65 // Using at method

console.log("name".at(0)); // n
