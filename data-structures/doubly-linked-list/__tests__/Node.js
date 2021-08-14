import Node from "../Node";

describe("Node", () => {
  test("it initializes with value, next, and previous properties", () => {
    const node = new Node(1);
    const undefinedNode = new Node();

    expect(node.value).toBe(1);
    expect(node.next).toBe(null);
    expect(node.previous).toBe(null);

    expect(undefinedNode.value).toBe(undefined);
  });
});
