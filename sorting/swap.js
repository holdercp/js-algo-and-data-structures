const swap = (arr = [], i1 = 0, i2 = 0) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

export default swap;
