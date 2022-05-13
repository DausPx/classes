// // import fetch from "node-fetch";
// const promise = new Promise((resolve, reject) => {
//   const random = Math.random() * 1000;

//   setTimeout(() => {
//     resolve(random);
//   }, 2000);
// });

// promise
//   .then((value) => console.log("resolve", value))
//   .catch((vale) => console.log("reject", vale))
//   .finally(() => console.log("finally"));

// fetch("https://api.quotable.io/random")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random() * 1000;

//   setTimeout(() => {
//     if (random > 500) {
//       resolve(random);
//     } else {
//       reject(random);
//     }
//   }, random);
// });

// const promise2 = async () => {
//   console.log("pocetak");
//   const randomNumber = await promise;
//   console.log(randomNumber);
// };

// promise2();
// console.log("main funkcija");

promise.then(() => {
  new Promise().then(() => {
    new Promise().then((value) => value);
  });
});

Promise.all([promise, promise]);
Promise.race([]);
Promise.allSettled([]);
