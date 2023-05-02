const palindromes = string => {
  const normalized = string.toLowerCase().replace(/[^a-z]/g, '');
  return normalized === [...normalized].reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;