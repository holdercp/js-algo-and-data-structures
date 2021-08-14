import swap from "./swap.js";

function selectionSort(arr = []) {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(arr, min, i);
    }
  }

  return arr;
}

const array = [0, 4, 7, 2, 4, 34, 54, 23, 654, 223, 12];

console.log(selectionSort(array));
