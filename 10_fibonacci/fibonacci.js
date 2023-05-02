const fibonacci = count => {
  if (count < 0) return 'OOPS'
  if (count === 0) return 0;
  let prev = 0;
  let current = 1;
  for (let i = 1; i < count; i++) {
    [prev, current] = [current, prev + current];
  }
  return current;
}

// Do not edit below this line
module.exports = fibonacci;