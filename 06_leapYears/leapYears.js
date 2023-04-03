const leapYears = function(year) {
  return !(year % 400) || !(year % 4) && Boolean(year % 100)
};

// Do not edit below this line
module.exports = leapYears;
// if (!(year % 400)) return true
//   if (!(year % 100)) return false
//   return !(year % 4)