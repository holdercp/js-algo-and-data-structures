function merge(a1 = [], a2 = []) {
  const sorted = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      sorted.push(a1[i]);
      i++;
    } else {
      sorted.push(a2[j]);
      j++;
    }
  }

  while (i < a1.length) {
    sorted.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    sorted.push(a2[j]);
    j++;
  }

  return sorted;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

const result = mergeSort([3, 3, 4, 1, 8, 4, 7, 8, 9]);

console.log(result);
