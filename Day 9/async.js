console.group("Program Started....");
setTimeout(() => {
  console.log("Hello !");
}, 5000);
console.log("After Timeout");

// ==============================================

setInterval(() => {
  let today = new Date();
  console.log(today.toLocaleTimeString());
}, 2000);

setInterval(() => {
  let count = 0;
  let counter = count + 1;
  console.log(counter);
}, 2000);
