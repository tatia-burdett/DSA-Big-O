function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i === 0) return false;
  }
  return true;
}

let n = 29

console.log(isWhat(n))

// Function determins if number is a prime number, returns false or true
// 0(n) -- scales with size of input (in relation to the "n" variable as an integer, 10 is larger than 3, thus it loops through more times). 