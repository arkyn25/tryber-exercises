let left = [4, 8,11, 20]

let right = [1, 3, 5, 6, 25, 30]

function merge (left, right) {
  var result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length)
  result.push(left.shift())
  while (right.length)
  result.push(right.shift())
  return result
}

console.log()