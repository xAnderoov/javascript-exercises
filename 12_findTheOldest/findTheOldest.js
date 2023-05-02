const yearsLived = (birth, death = (new Date).getFullYear()) => death - birth;
const findTheOldest = array => array.sort((a, b) =>
  yearsLived(b.yearOfBirth, b.yearOfDeath) -
  yearsLived(a.yearOfBirth, a.yearOfDeath)
)[0];

// Do not edit below this line
module.exports = findTheOldest;