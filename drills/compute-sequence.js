function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i === 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

let num = 10

console.log(compute(num))

// This algorithm computes index of in the fibanocci sequence of the given number. The 7th place in the sequence is 13.
// O(2^n) -- algorithm doubles with each addition to the input