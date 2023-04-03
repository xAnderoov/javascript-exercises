const reverseString = function(input) {
  let result = '';
  for (let i = input.length; i > 0; i--) {
    result += input[i - 1];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
