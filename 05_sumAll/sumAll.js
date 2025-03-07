const sumAll = function (num1, num2) {
  let highestNumber = Math.max(num1, num2);
  let smallestNumber = Math.min(num1, num2);

  let sum = 0;

  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (highestNumber && smallestNumber < 0) {
      return "ERROR";
    } else {
      for (let i = smallestNumber; i <= highestNumber; i++) {
        sum += i;
      }
      return sum;
    }
  } else {
    return "ERROR";
  }
};

module.exports = sumAll;
