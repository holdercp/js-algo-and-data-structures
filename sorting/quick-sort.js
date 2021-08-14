import swap from "./swap.js";

function partition(array = [], start = 0, end = array.length - 1) {
  const pivotValue = array[start];
  let pivotIndex = start;

  for (let index = start; index <= end; index++) {
    if (pivotValue > array[index]) {
      pivotIndex++;
      swap(array, index, pivotIndex);
    }
  }

  swap(array, start, pivotIndex);
  return pivotIndex;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let pivot = partition(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1);
  }

  return array;
}

const testArr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

console.log(quickSort(testArr));
