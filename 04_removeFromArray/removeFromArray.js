const removeFromArray = function (inputArray, ...theArgs) {
  return inputArray.filter(item => !theArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
