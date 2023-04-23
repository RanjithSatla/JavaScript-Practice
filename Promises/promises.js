/**
 * Promises : A promise is an object representing the eventual completion or failure of an asynchronous operation.
 */

// Earlier :
api.createOrder(cart, function (orderId) {
  api.proceedToPayment(orderId);
});

// Promises :
const orderDetails = api.createOrder(cart);

// This returns a promise object to orderDetails which holds the data.

/**
 * orderDetails : Promise Spacial Object
 * {
 * prototype : promise,
 * promiseState : pending - Initially, fulfilled - Success, rejected - failure.
 * promiseResult : undefined => Data once fulfilled.
 * }
 */

// Now we can chain it to api.proceedToPayment
orderDetails.then(function (orderId) {
  api.proceedToPayment(orderId);
});

/**
 * Earlier we are passing onus of out payment to createOrder.
 * Here, we  are chaining it to our promise obj. Both are not same.
 * Data from promise are immutable.
 * A promise is resolved only once. So no calling of payment twice.
 * Solved Inversion of control.
 */

// Earlier :
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.orderSummary(function () {
      api.updateWallet();
    });
  });
});

// Promise Chaining :
api
  .createOrder(cart)
  .then((orderId) => api.proceedToPayment(orderId))
  .then((orderSummary) => api.orderSummary)
  .then((orderSummary) => api.updateWallet);

/**
 * Code is clean and lean
 * To solve callback hell.
 * Add return if function keyword is used to create cb.
 */
