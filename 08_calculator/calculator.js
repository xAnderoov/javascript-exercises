const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sum = array => array.reduce((acc, item) => acc + item, 0);

const multiply = array => array.length ?
  array.reduce((acc, item) => acc * item) : 0;

const power = (number, level) =>
  level == 0 ? 1 : number * power(number, level - 1);

const factorial = number => number == 0 ? 1 : number * factorial(number - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
