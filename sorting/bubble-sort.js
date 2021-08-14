import swap from "./swap.js";

function bubbleSort(arr = []) {
  if (arr.length <= 1) return arr;

  arr.forEach(() => {
    let swapped = false;
    let i = 0;
    while (!swapped && i < arr.length) {
      const current = arr[i];
      const next = arr[i + 1];

      if (current > next) {
        swap(arr, i, i + 1);
        swapped = true;
      }

      i++;
    }
  });

  return arr;
}

const array = [0, 4, 7, 2, 4, 34, 54, 23, 654, 223, 12];

console.log(bubbleSort(array));
