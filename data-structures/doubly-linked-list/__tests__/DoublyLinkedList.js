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

    test("it empties a list with only one node", () => {
      const list = buildList(1);

      list.pop();

      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    test("it removes the last node in the list and returns it", () => {
      const list = buildList(3);

      const node = list.pop();

      expect(node.value).toBe(3);
      expect(list.tail.value).toBe(2);
      expect(list.tail.next).toBe(null);
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

  describe("shift", () => {
    test("returns undefined if the list is empty", () => {
      const list = buildList();

      const node = list.shift();

      expect(node).toBe(undefined);
    });

    test("removes the first node in the list and returns it", () => {
      const list = buildList(2);

      const node = list.shift();

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(2);
      expect(list.head.previous).toBe(null);
      expect(list.tail.value).toBe(2);

      expect(node.value).toBe(1);
      expect(node.next).toBe(null);
    });

    test("empties list if length is one", () => {
      const list = buildList(1);

      const node = list.shift();

      expect(list.length).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);

      expect(node.value).toBe(1);
      expect(node.next).toBe(null);
      expect(node.previous).toBe(null);
    });
  });

  describe("unshift", () => {
    test("it adds a node to the beginning on the list", () => {
      const list = buildList(2);

      const res = list.unshift(3);

      expect(list.head.value).toBe(3);
      expect(list.head.next.value).toBe(1);
      expect(list.head.previous).toBe(null);

      expect(list.head.next.previous.value).toBe(3);
      expect(list.head.next.next.value).toBe(2);

      expect(list.length).toBe(3);

      expect(res).toBe(list);
    });

    test("it initializes an empty list", () => {
      const list = buildList();

      const res = list.unshift(3);

      expect(list.head.value).toBe(3);
      expect(list.head.next).toBe(null);
      expect(list.head.previous).toBe(null);
      expect(list.tail.value).toBe(3);
      expect(list.tail.next).toBe(null);
      expect(list.tail.previous).toBe(null);

      expect(list.length).toBe(1);

      expect(res).toBe(list);
    });
  });

  describe("get", () => {
    test("if the index is out of bounds, it returns null", () => {
      const list = buildList(2);

      const res1 = list.get(-1);
      const res2 = list.get(2);
      const res3 = list.get(3);

      expect(res1).toBeNull();
      expect(res2).toBeNull();
      expect(res3).toBeNull();
    });

    test("it returns the node at the given index", () => {
      const list = buildList(10);

      const res1 = list.get(4);
      const res2 = list.get(8);

      expect(res1.value).toBe(5);
      expect(res2.value).toBe(9);
    });
  });

  describe("set", () => {
    test("it replaces the value of the head", () => {
      const list = buildList(2);

      const res = list.set(0, 2);

      expect(res).toBe(true);
      expect(list.head.value).toBe(2);
    });

    test("it replaces the value of the tail", () => {
      const list = buildList(2);

      const res = list.set(1, 3);

      expect(res).toBe(true);
      expect(list.tail.value).toBe(3);
    });

    test("it replaces the given index with the given value", () => {
      const list = buildList(3);

      const res = list.set(1, 5);

      expect(res).toBe(true);
      expect(list.head.next.value).toBe(5);
    });

    test("it returns false if their is no node at the given index", () => {
      const list = buildList(3);

      const res = list.set(3, 5);

      expect(res).toBe(false);
    });
  });

  describe("insert", () => {
    test("it retuns false if the index is out of bounds", () => {
      const list = buildList(4);

      const res1 = list.insert(-1, 10);
      const res2 = list.insert(5, 10);

      expect(res1).toBe(false);
      expect(res2).toBe(false);
      expect(list.length).toBe(4);
    });

    test("it correctly inserts at the beginning of the list", () => {
      const list = buildList(4);

      const res = list.insert(0, 10);

      expect(res).toBe(true);
      expect(list.length).toBe(5);
      expect(list.head.value).toBe(10);
    });

    test("it correctly inserts at the end of the list", () => {
      const list = buildList(4);

      const res = list.insert(4, 10);

      expect(res).toBe(true);
      expect(list.length).toBe(5);
      expect(list.tail.value).toBe(10);
    });

    test("it inserts a new node at the given postion", () => {
      const list = buildList(4);

      const res = list.insert(1, 10);

      expect(res).toBe(true);
      expect(list.length).toBe(5);
      expect(list.head.next.value).toBe(10);
    });
  });

  describe("remove", () => {
    test("it returns undefined if the given index is out of bounds", () => {
      const list = buildList(3);

      const res1 = list.remove(-1);
      const res2 = list.remove(3);

      expect(res1).toBe(undefined);
      expect(res2).toBe(undefined);
    });

    test("it removes the first node in the list", () => {
      const list = buildList(3);

      const res = list.remove(0);

      expect(res.value).toBe(1);
      expect(list.length).toBe(2);
      expect(list.head.value).toBe(2);
    });

    test("it removes the last node in the list", () => {
      const list = buildList(3);

      const res = list.remove(2);

      expect(res.value).toBe(3);
      expect(list.length).toBe(2);
      expect(list.tail.value).toBe(2);
    });

    test("it removes the node from the list", () => {
      const list = buildList(3);

      const res = list.remove(1);

      expect(res.value).toBe(2);
      expect(res.next).toBe(null);
      expect(res.previous).toBe(null);

      expect(list.length).toBe(2);
      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(3);
      expect(list.tail.value).toBe(3);
      expect(list.tail.previous.value).toBe(1);
    });
  });
});
