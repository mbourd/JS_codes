function findAllIndices(arr, predicate) {
  return arr.reduce((indices, element, index) => {
    if (predicate(element)) {
      indices.push(index);
    }
    return indices;
  }, []);
}

const numbers = [1, 2, 3, 4, 2, 5, 2];
const targetValue = 2;

const indices = findAllIndices(numbers, (element) => element === targetValue);
console.log(indices); // Output: [1, 4, 6]
