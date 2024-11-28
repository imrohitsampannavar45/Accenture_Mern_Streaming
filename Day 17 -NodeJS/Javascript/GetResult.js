let statusofSeat = require('./Promiseexample');

//how to use the promise 

statusofSeat
    .then((msg) => { console.log(msg) })
    .catch((msg) => { console.log(msg) })
    .finally(() => { console.log("Finally Function") })