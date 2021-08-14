import { getDigits, digitCount, mostDigits, radixSort } from "./radix-sort";

describe("getDigits", () => {
  test("returns the correct digit at the specified position", () => {
    expect(getDigits(123, 0)).toBe(3);
  });

  test("returns undefined when a string is given as the integer", () => {
    expect(getDigits("123", 0)).toBe(undefined);
  });

  test("returns undefined when a string is given as the position", () => {
    expect(getDigits(123, "0")).toBe(undefined);
  });

  test("returns 0 when the position does not exist for the integer", () => {
    expect(getDigits(123, 4)).toBe(0);
  });

  test("returns undefined when a negative number is given as the integer", () => {
    expect(getDigits(-123, 0)).toBe(undefined);
  });

  test("returns undefined when a negative number is given as the position", () => {
    expect(getDigits(123, -1)).toBe(undefined);
  });

  test("returns undefined when a float is given as the integer", () => {
    expect(getDigits(12.3, 0)).toBe(undefined);
  });

  test("returns undefined when a float is given as the position", () => {
    expect(getDigits(123, 1.2)).toBe(undefined);
  });

  test("returns undefined when nothing is given", () => {
    expect(getDigits()).toBe(undefined);
  });
});

describe("digitCount", () => {
  test("returns the correct number of digits in the given integer", () => {
    expect(digitCount(123)).toBe(3);
  });

  test("returns undefined when a float is given", () => {
    expect(digitCount(12.3)).toBe(undefined);
  });

  test("returns undefined when a string is given", () => {
    expect(digitCount("123")).toBe(undefined);
  });

  test("returns undefined when a negative number is given", () => {
    expect(digitCount(-123)).toBe(undefined);
  });

  test("returns undefined when nothing is given", () => {
    expect(digitCount()).toBe(undefined);
  });
});

describe("mostDigits", () => {
  test("returns the number of digits of the largest number in the given array", () => {
    expect(mostDigits([1, 123, 123])).toBe(3);
  });

  test("returns 0 if nothing is given", () => {
    expect(mostDigits()).toBe(0);
  });

  test("returns 0 if something other than an array is given", () => {
    expect(mostDigits({})).toBe(0);
  });

  test("returns the digit count of any number in the given array", () => {
    expect(mostDigits([1, "2", {}])).toBe(1);
  });

  test("returns 0 if no numbers exist in the array", () => {
    expect(mostDigits([[], "2", {}])).toBe(0);
  });
});

describe("radixSort", () => {
  test("sorts the given array", () => {
    expect(radixSort([3, 123, 12, 1, 2, 13])).toEqual([1, 2, 3, 12, 13, 123]);
    expect(radixSort([0, 3, 11233, 11232, 121, 337562, 143252453])).toEqual([
      0,
      3,
      121,
      11232,
      11233,
      337562,
      143252453,
    ]);
  });
});
