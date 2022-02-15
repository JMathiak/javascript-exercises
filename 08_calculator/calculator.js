const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function (n1, n2) {
  let prod = n1;
  for (i = 1; i < n2; i++) {
    prod *= n1;
  }
  return prod;
};

const factorial = function (num) {
  let sum = 1;
  if (num === 0) {
    return 1;
  } else {
    for (i = 1; i <= num; i++) {
      sum *= i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
