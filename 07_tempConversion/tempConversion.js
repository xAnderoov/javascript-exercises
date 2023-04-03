const roundToDecimal = number => Math.round(number * 10) / 10

const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * .5556;
  return roundToDecimal(cTemp);
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * 1.8 + 32;
  return roundToDecimal(fTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
