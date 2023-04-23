/**
 * Callback Functions :
 * In JavaScript, a callback function is a function that is passed as an argument to another function and is executed when the other function is called.
 * Callback functions are often used to handle asynchronous operations,
 * Such as fetching data from an API, where the result may not be immediately available.
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

///////// ********** /////////////////

// PROBLEMS with Callbacks :

// 1.CALLBACK HELL :

// Suppose a E-Commerce website where we add items to card and pay.

const cart = ["shoes", "shirts", "pants"];

// There is an api to create order.
appendFile.createOrder(cart);

/**
 * After the creating order we need to do payment.api.proceedToPayment.
 * This has dependency on create order such that payment can only be done after creating order.
 * So we pass payment api to createOrder expecting it will call our function after sometime once order is created.
 */

appendFile.createOrder(cart, function () {
  api.proceedToPayment();
});

// No suppose we need to show order summary.This is dependent on payment.

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.orderSummary();
  });
});

// Now there is an api called Update wallet.

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.orderSummary(function () {
      api.updateWallet();
    });
  });
});

/**
 * This is called Callback hell.
 * A cb function depending on another cb which is dependent on another cb.
 * This structure is called pyramid of doom.
 *  Hard to read and maintainable
 */

// 2.Inversion of control : Is like we loose control of our code when we are using callbacks

appendFile.createOrder(cart, function () {
  api.proceedToPayment();
});

/**
 * Here we are trusting createOrder api that it will call proceedToPayment sometime in future.
 * This  may or may not happen. w
 * We dont't know that whose wrote createOrder. Some intern may have wrote it.
 * There may be bugs in createOrder.
 * What if proceedToPayment called twice.
 * This is called Inversion  of control.
 */
