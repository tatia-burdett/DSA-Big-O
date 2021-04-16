function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

let array = [1, 2, 3, 4, 5, 6, 7]

console.log(doubleArrayValues(array))

// o(log(n)) 