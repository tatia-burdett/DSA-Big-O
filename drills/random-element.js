function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(findRandomElement(arr))

// O(n) -- scales directly with size of input