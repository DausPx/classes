// class Animal {
//   constructor(name = "Misko", age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   roar() {
//     return "";
//   }
//   eat() {
//     return "give me food";
//   }
// }

// class Wolf extends Animal {
//   constructor(name, age, alpha = false) {
//     super(name, age);
//     this.alpha = alpha;
//   }

//   roar() {
//     return "auuuuuuuuuuuuu";
//   }

//   eat() {
//     return "where is my meat";
//   }
// }

// const wolfObj = new Wolf("nidzo", 19, true);

// Wolf.prototype.newMethod = () => {
//   return "I was added later";
// };

// const wolf2 = new Wolf("milzas", 27, false);

// console.log(wolf2.newMethod(), wolfObj.newMethod());

Array.prototype.newMethod = function () {
  this.forEach((value) => console.log(value));
};

const array = [1, 2, 3, 4, 5, 6];
["s"].newMethod();

array.newMethod();
