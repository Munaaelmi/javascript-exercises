const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, currentValue) => acc * currentValue);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let holder = [];

  for (let i = 1; i <= num; i++) {
    holder.push(i);
  }

  return holder.reduce((acc, counterValue) => counterValue * acc, 1);
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
