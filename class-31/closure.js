const closure = (array) => {
  return () => {
    return array.length > 0 ? true : false;
  };
};

let array1 = [123, 23, 32, 3];
let array2 = [12];

const isEmpty1 = closure(array1);
const isEmpty2 = closure(array2);

console.log(isEmpty2());
array2 = [];
console.log(isEmpty2());
