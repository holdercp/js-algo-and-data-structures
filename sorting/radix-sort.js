function getDigits(integer = -1, position = -1) {
  if (!Number.isInteger(integer) || !Number.isInteger(position)) return;
  if (integer < 0 || position < 0) return;

  if (position > `${integer}`.length) return 0;

  return Math.floor((integer / Math.pow(10, position)) % 10);
}

function digitCount(integer = -1) {
  if (!Number.isInteger(integer) || integer < 0) return;

  return `${integer}`.length;
}

function mostDigits(arr = []) {
  let largestDigitCount = 0;

  if (!arr || arr.length === 0 || !Array.isArray(arr)) {
    return largestDigitCount;
  }

  arr.forEach((element) => {
    const count = digitCount(element);
    if (count > largestDigitCount) {
      largestDigitCount = count;
    }
  });

  return largestDigitCount;
}

function radixSort(numbers = []) {
  const loops = mostDigits(numbers);
  let sorted = [...numbers];

  for (let i = 0; i < loops; i++) {
    const buckets = [...Array(10)].map(() => []);
    sorted.forEach((num) => {
      const digit = getDigits(num, i);
      buckets[digit].push(num);
    });

    sorted = buckets.flat();
  }

  return sorted;
}

radixSort([3, 123, 12, 1, 2, 13]);

export { getDigits, digitCount, mostDigits, radixSort };
