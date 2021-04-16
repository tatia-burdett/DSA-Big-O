function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

let array = [1, 2, 3, 4, 5, 6, 7]

let item = 7

console.log(naiveSearch(array, item))

// 0(n) performance grows linearlly, based of data size