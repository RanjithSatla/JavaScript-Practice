const cart1 = ["shoes", "shirts", "pants"];

// Create order function will take cart and returns orderId which is a promise.
const promise = createOrder(cart1); //orderId
console.log(promise); // Promise {<pending>}

// Consuming promise :
promise
  .then((orderId) => {
    console.log(promise); // Promise {<fulfilled>: 12345}
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    // retruning promise
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("This will be called anyway");
  });

function createOrder(cart) {
  //validate cart
  //create cart

  //Invoke Promise constructor to create a promise
  const pr = new Promise((resove, reject) => {
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid");
      reject(error);
    }

    //api call to validate = Fake it api call takes 5secs
    setTimeout(() => {
      const orderId = 12345;
      resove(orderId);
    }, 5000);
  });
  return pr;
}

function validateCart(cart) {
  //Logic to validate , true for simplicity
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((res, rej) => {
    res("Payment successful");
  });
}

/**
 * createOrder
 * Proceed to Payment
 * payment Info
 * Update wallet Balance
 */

const cart = ["shoe", "shirt", "pant"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return paymentInfo(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
    return showSummary(paymentInfo);
  })
  .then((summary) => {
    console.log(summary);
    return UpdateWalletBalance(summary);
  });

function createOrder() {
  return new Promise((resolve, reject) => {
    const orderId = 12345;
    resolve(orderId);
    const error = new Error("Cart not valid");
    reject(error);
  });
}

function paymentInfo() {
  return new Promise((resolve, reject) => {
    resolve("payment successful");
  });
}

function showSummary() {
  return new Promise((resolve, reject) => {
    resolve("Order Id is 12345 and Payment succesdul");
  });
}

function UpdateWalletBalance() {
  return new Promise((resolve, reject) => {
    resolve("Updated wallet balance is xyz");
  });
}
