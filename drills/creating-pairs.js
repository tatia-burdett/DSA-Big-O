function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

let arr = [1, 2, 3, 4, 5]

console.log(createPairs(arr))

// O(n^2) nested loop, performance linked to square of the size of input