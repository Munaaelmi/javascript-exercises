const removeFromArray = function (arr, ...args) {
  let removedNumbers = [];
  arr.forEach((item) => {
    if (!args.includes(item)) {
      removedNumbers.push(item);
    }
  });
  return removedNumbers;
};

// Do not edit below this line
module.exports = removeFromArray;
