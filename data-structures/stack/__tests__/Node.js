import Node from "../Node";

describe("Node", () => {
  test("has a value", () => {
    const value = 1;
    const node = new Node(value);

    expect(node.value).toBe(value);
  });

  test("has a linked node", () => {
    const node = new Node();
    const secondNode = new Node();
    node.next = secondNode;

    expect(node.next).toBe(secondNode);
  });
});
