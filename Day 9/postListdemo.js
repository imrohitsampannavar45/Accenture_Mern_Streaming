// // https://jsonplaceholder.typicode.com/posts

// let p = fetch("https://jsonplaceholder.typicode.com/posts");

// p.then((res) => res.json())
//   .then((jsondata) => console.log(jsondata))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("request is completed");
//   });

let n = fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
n.then((res) => res.json())
  .then((jsondata) => console.log(jsondata))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("request is completed");
  });
