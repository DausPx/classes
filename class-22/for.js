// var a = [1, 2, 3, 4, 5, "2"];
// var array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]]];

// console.log(array[4][4][4]);

// var array = [[["nesto 2"], ["nesto 3"]], [["nesto 4"], ["nesto 5"]], ["nesto"]];

// console.log(array[1][0][0]);

// var n = 10;
// var sum = 0;

// for (var i = 0; i < n; i++) {
//   sum = sum + i
// }

// console.log(sum);

// var array = [1, 2, 3, 4, 5, 6];

// var n = 2;

// var found = false;
// for (var i = 0; i < array.length; i++) {
//   if (array[i] === n) {
//     found = true;
//     console.log(i);
//   }
// }

// if (!found) {
//   console.log(-1);
// }

// var array = [1, 2, 23424, 4, 5, 6];
// var max = array[0];
// var min = array[0];

// for (var i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
// }

// for (var i = 0; i < array.length; i++) {
//   if (min > array[i]) {
//     min = array[i];
//   }
// }

// for (var i = 0; i < array.length; i++) {
//   if (min > array[i]) {
//     min = array[i];
//   }
//   if (max < array[i]) {
//     max = array[i];
//   }
// }

// console.log(min, max);

var array1 = ["a", "b", "c", "d"];
var array2 = ["a", "b", "f"];

var common = [];

for (let index1 = 0; index1 < array1.length; index1++) {
  for (let index2 = 0; index2 < array2.length; index2++) {
    if (array1[index1] !== array2[index2]) {
      common.push(array1[index1]);
    }
  }
}

console.log(common);
