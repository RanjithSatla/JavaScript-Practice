/**
 * Callback Functions : In JavaScript, a callback function is a function that is passed as an argument to another function and is executed when the other function is called.
 * Callback functions are often used to handle asynchronous operations, such as fetching data from an API, where the result may not be immediately available.
 *
 */

setTimeout(() => {
  console.log("timer finished");
}, 5000);

//Here setTimeout takes a callback function and attaches a timer of 5sec and the function now goes in callstack and get executed

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

//OP :

// x
// y
// timer finished

//******** EventListeners ********//

//Build a counter on clicking a button with id: clickme

<button id="clickme">clickme</button>;

function counter() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", () => {
    console.log("clicked", ++count);
  });
}
counter();

//When click me button is clicked callback function associated with the addEventlistener is caled so clicked is logged into the console.
