//console.log("sending req")

/*setTimeout(()=>{
    console.log("recieved Response")
},3000)
 
console.log("Process response")
console.log("display response")*/

let p = new Promise(function (resolve, reject) {
  console.log("sending req");
  setTimeout(() => {
    console.log("recieved Response");
    resolve("response recieved successfully!!");
    //reject("server Error!!")
  }, 3000);
});

p.then((msg) => {
  console.log(msg);
  console.log("transform response");
  return "transformed response ";
})
  .then((msg) => {
    console.log("display" + msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("program completed...");
  });
