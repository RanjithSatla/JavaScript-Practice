// for of Method

const arr = [1, 2, 3, 4, 5];

for (const num of arr) console.log(num);
/*
1
2
3
4
5
*/

//To get index : call entries method on array
for (const num of arr.entries()) console.log(num);
/*
[ 0, 1 ] // [index, arrayElement]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
*/

for (const [i, el] of arr.entries()) {
  console.log(`Index:${i} Element: ${el}`);
}

/*
Index:0 Element: 1
Index:1 Element: 2
Index:2 Element: 3
Index:3 Element: 4
Index:4 Element: 5 
*/

////////  FOREACH  /////////

/* 
forEach : forEach loops over an array and in each iteration it calls the callback function by passing the current value, index and whole array as an arguments.

Syntax : array.forEach( (element,index,array) => {
//code
})
*/

arr.forEach((val, i, arr) => {
  console.log(`Index : ${i} Val: ${val} , ${arr}`);
});

/* 
Index : 0 Val: 1 , 1,2,3,4,5
Index : 1 Val: 2 , 1,2,3,4,5
Index : 2 Val: 3 , 1,2,3,4,5
Index : 3 Val: 4 , 1,2,3,4,5
Index : 4 Val: 5 , 1,2,3,4,5
*/
