function x() {
  setTimeout(function () {
    console.log(i);
  }, 1000);
  let i = 100;
  console.log("Example");
}

x();

// OP :
/*
Example
100
*/

const y = () => {
  let i = 200;
  setTimeout(() => {
    console.log(i);
  }, 1000);
};
y();

///////////////////////   ************   ////////////////////////

// Q : Log 1,2,3,4,5 to console after every 1sec,2sec,3sec,4sec,5sec resp.

const z = () => {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Example");
};

z();

//OP :6 6 6 6 6

/*
Reason : It is due to the closure associated with the setTimeout function.

-> In every loop the function is copied and a timer is attached to it along with the lexical scope in which it the refers to the var memory location.
-> By the time the timer is done the loop already finishes and the i value is changed to 6. Hence it prints 6.
*/

///////////////////////   ************   ////////////////////////

const p = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Example");
};

p();

//OP :1 2 3 4 5

// Reason : let is block scoped. So every time the i val increases in the loop it refers to complete new copy of the var i.

///////////////////////   ************   ////////////////////////

// Q : Log 1,2,3,4,5 to console after every 1sec,2sec,3sec,4sec,5sec resp using var.

const q = () => {
  for (var i = 1; i <= 5; i++) {
    const close = (i) => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    };
    close(i);
  }
};

q();

//OP :1 2 3 4 5

// Reason : We need to pass new val of i in each iteration. So enclose setTimeout function in a new function and pass the i value each time.
