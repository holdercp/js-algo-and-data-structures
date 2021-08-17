import DoublyLinkedList from "../DoublyLinkedList";

const buildList = function buildDoublyLinkedList(numOfNodes = 0) {
  const list = new DoublyLinkedList();

  for (let i = 1; i <= numOfNodes; i += 1) {
    list.push(i);
  }

  return list;
};

describe("DoublyLinkedList", () => {
  test("it initializes with head, tail, and length properties", () => {
    const list = buildList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  });

  describe("push", () => {
    test("if the list is empty, the head and tail are set to the new node", () => {
      const list = buildList();

      list.push(1);

      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBe(null);
      expect(list.head.next).toBe(null);

      expect(list.tail.value).toBe(1);
      expect(list.tail.previous).toBe(null);
      expect(list.tail.next).toBe(null);

      expect(list.length).toBe(1);
    });

    test("if no value is provided, the list is returned unchanged", () => {
      const list = buildList();

      list.push();

      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    test("it adds a new node to the end of the list", () => {
      const list = buildList(1);

      list.push(2);

      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBe(null);
      expect(list.head.next.value).toBe(2);

      expect(list.tail.value).toBe(2);
      expect(list.tail.previous.value).toBe(1);
      expect(list.tail.next).toBe(null);

      expect(list.length).toBe(2);
    });
  });

  describe("pop", () => {
    test("it returns undefined if the list is empty", () => {
      const list = buildList();

      const node = list.pop();

      expect(node).toBe(undefined);
    });

    test("it removes the last node in the list and returns it", () => {
      const list = buildList(3);

      const node = list.pop();

      expect(node.value).toBe(3);
      expect(list.tail.value).toBe(2);
      expect(list.head.next.value).toBe(2);
      expect(list.length).toBe(2);
    });

    test("the returned node's links are broken", () => {
      const list = buildList(3);

      const node = list.pop();

      expect(node.previous).toBe(null);
      expect(node.next).toBe(null);
    });
  });
});
