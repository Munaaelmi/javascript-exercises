const convertToCelsius = function (temp) {
  let formula = (temp - 32) / 1.8;

  if (!Number.isInteger(formula)) {
    return Number(formula.toFixed(1));
  } else {
    return formula;
  }
};

const convertToFahrenheit = function (temp) {
  let formula = temp * 1.8 + 32;

  if (!Number.isInteger(formula)) {
    return Number(formula.toFixed(1));
  } else {
    return formula;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
