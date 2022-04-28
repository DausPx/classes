// for (let index = 0; index < 10; index++) {
//   const a = 10;
//   console.log(a);
// }

// const a = {};
// a.name = "suad";

// console.log(a);

// let b = 20;

// function removeCharacter(title = "123j", character = "j") {
//   return title.replace(character, "");
// }

// console.log(removeCharacter());

// const removeCharacter2 = (title = "123j", character = "j") => {
//   return title.replace(character, "");
// };

// console.log(removeCharacter2());

// let array1 = { name: "suad" };
// let array2 = { ...array1 };

// array2.name = "irfan";

// console.log(array1, array2);

// function charsToString(...args) {
//   let sum = "";
//   for (let index = 0; index < args.length; index++) {
//     const element = args[index];
//     sum += element;
//   }

//   return sum;
// }

// console.log(charsToString(1, 2, 3, 4, 5, "a", "b", "22"));

const sum = (...args) => {
  let tempSum = 0;

  for (let index = 0; index < args.length; index++) {
    const element = args[index];

    if (typeof element === "number") {
      tempSum += element;
    }

    if (typeof element === "string") {
      // let value
      // if(Object.is(+element, NaN)){
      //   value = 0
      // } else{
      //   value = +element
      // }
      tempSum += Object.is(+element, NaN) ? 0 : +element;
    }
  }

  return tempSum;
};

console.log(sum(1, 2, 3, 4, 5, 6, "1123 sdfsd"));
