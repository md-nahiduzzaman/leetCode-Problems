var map = function (arr, fn) {
  let result = [];

  for (i = 0; i < arr.length; i++) {
    const newValue = fn(arr[i], i);
    result.push(newValue);
    console.log(`arr[${i}] = ${arr[i]}, newValue = ${newValue}`);
  }

  return result;
};

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};

const newArray = map(arr, fn);
console.log(newArray);
