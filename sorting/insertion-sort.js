function insertionSort(arr = []) {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];

    let j = i - 1;
    for (j; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }

  return arr;
}

const array = [0, 4, 7, 2, 4, 34, 54, 23, 654, 223, 12];

console.log(insertionSort(array));
