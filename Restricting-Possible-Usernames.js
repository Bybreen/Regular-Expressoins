// Change the regex userCheck to fit the constraints.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
