// function sum(n) {
//   var s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   return s;
// }

// function sumR(n) {
//   var sum = 0;
//   if (n === 1) {
//     return 1;
//   }

//   sum = n + sumR(n - 1);
//   return sum;
// }

// function productR(n) {
//   if (n === 1) {
//     return 1;
//   }

//   var sum = n * productR(n - 1);
//   return sum;
// }

// 4
// [4,3,2,1]
// var a = [1, 2, 3, 4, 5];

// var b = [...a];

// b.push(4);

// console.log(a, b);

// function countdown(n) {
//   if (n === 1) {
//     return [1];
//   }

//   //   var string = `${n} ${countdown(n - 1)}`;
//   //   var string = n + " " + countdown(n - 1);
//   //   var array = [n, ...countdown(n - 1)];
//   var array = [];
//   array.push(n);
//   array.push(...countdown(n - 1));

//   return array;
// }

// console.log(countdown(4));

// 2, 5
// 2, 3, 4, 5

// function range(a, b) {
//   if (a === b) {
//     return b;
//   }

//   var string = `${a}, ${range(a + 1, b)}`;
//   return string;
// }

// console.log(range(2, 5));
