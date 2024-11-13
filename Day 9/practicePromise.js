let n = new Promise(function (resolve, reject) {
  console.log("hello World Sending Request");
  setTimeout(() => {
    console.log("hello wolrd recieved response");
    // resolve("response receieved successfully");
    reject("server Errror");
  }, 3000);
});

n.then((msg) => {
  console.log(msg);
  console.log("transform response");
  return "transformed response";
})

  .then((msg) => {
    console.log("display" + msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("program completed");
  });
