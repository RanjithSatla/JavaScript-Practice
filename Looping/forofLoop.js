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
