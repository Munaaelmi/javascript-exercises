const fibonacci = function (n) {
  n = Number(n);

  let previousNumber = 0;
  let currentNumber = 1;

  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    const nextNumber = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }

  return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
