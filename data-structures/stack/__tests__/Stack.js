import Stack from "../Stack";

describe("Stack", () => {
  test("it initializes with no length, first node, or last node", () => {
    const stack = new Stack();

    expect(stack.length).toBe(0);
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
  });

  describe("push", () => {
    test("it adds a node to the beginning of the stack", () => {
      const stack = new Stack();

      stack.push(1);
      const result = stack.push(2);

      expect(stack.first.value).toBe(2);
      expect(stack.last.value).toBe(1);
      expect(stack.length).toBe(2);
      expect(result).toBe(2);
    });

    test("the new value is set as the first and the last item", () => {
      const stack = new Stack();

      const result = stack.push(1);

      expect(stack.first.value).toBe(1);
      expect(stack.last.value).toBe(1);
      expect(stack.length).toBe(1);
      expect(result).toBe(1);
    });
  });

  describe("pop", () => {
    test("it removes the last item added to the stack", () => {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();

      expect(stack.first.value).toBe(2);
      expect(stack.last.value).toBe(1);
      expect(stack.length).toBe(2);
    });

    test("the new value is set as the first and the last item", () => {
      const stack = new Stack();

      stack.push(1);

      expect(stack.first.value).toBe(1);
      expect(stack.last.value).toBe(1);
      expect(stack.length).toBe(1);
    });
  });
});
