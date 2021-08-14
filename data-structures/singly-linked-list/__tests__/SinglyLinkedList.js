import SinglyLinkedList from "../SinglyLinkedList";
import Node from "../Node";

function buildList(length) {
  const list = new SinglyLinkedList();

  for (let i = 1; i <= length; i += 1) {
    list.push(i);
  }

  return list;
}

describe("SinglyLinkedList", () => {
  test("initializes with no head, tail, and a length of 0", () => {
    const list = new SinglyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  });

  describe("push", () => {
    test("the first added value is both the head and tail", () => {
      const node = new Node(1);
      const list = buildList(1);

      expect(list.head).toEqual(node);
      expect(list.tail).toEqual(node);
      expect(list.length).toBe(1);
    });

    test("adds a new node to the end of the list", () => {
      const node = new Node(2);
      const list = buildList(2);

      expect(list.head.next).toEqual(node);
      expect(list.tail).toEqual(node);
      expect(list.length).toBe(2);
    });

    test("returns the list", () => {
      const list = new SinglyLinkedList();
      const result = list.push(1);

      expect(result).toEqual(list);
    });
  });

  describe("pop", () => {
    test("resets list when a list of length 1", () => {
      const list = buildList(1);
      list.pop();

      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    test("removes the last node in the list", () => {
      const node = new Node(1);
      const list = buildList(2);
      list.pop();

      expect(list.tail).toEqual(node);
    });

    test("returns the popped node", () => {
      const node = new Node(1);
      const list = buildList(1);
      const result = list.pop();

      expect(result).toEqual(node);
    });
  });

  describe("shift", () => {
    test("returns undefined if there are no nodes", () => {
      const list = new SinglyLinkedList();
      const result = list.shift();

      expect(result).toBe(undefined);
    });

    test("removes the first node in the list", () => {
      const node = new Node(2);
      node.next = new Node(3);
      const list = buildList(3);
      list.shift();

      expect(list.head).toEqual(node);
    });

    test("resets list when a list of length 1", () => {
      const list = buildList(1);
      list.shift();

      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });
  });

  describe("unshift", () => {
    test("adds a node to the head of the list", () => {
      const correctList = buildList(2);

      const list = new SinglyLinkedList();
      list.push(2);
      list.unshift(1);

      expect(list).toEqual(correctList);
    });

    test("returns the list", () => {
      const correctList = buildList(1);
      const list = new SinglyLinkedList();
      const result = list.unshift(1);

      expect(result).toEqual(correctList);
    });
  });

  describe("get", () => {
    test("returns null if the given index is greater than or equal to the length of the list", () => {
      const list = buildList(1);

      const result = list.get(1);
      const result2 = list.get(2);

      expect(result).toBe(null);
      expect(result2).toBe(null);
    });

    test("returns null if the given index is less than zero", () => {
      const list = new SinglyLinkedList();

      const result = list.get(-1);

      expect(result).toBe(null);
    });

    test("returns the node at the given index", () => {
      const list = buildList(3);

      const result = list.get(0);
      const result2 = list.get(2);

      expect(result.val).toBe(1);
      expect(result2.val).toBe(3);
    });
  });

  describe("set", () => {
    test("sets the node at the given index to the given value and returns true if the given index exists in the list", () => {
      const list = buildList(3);

      const result = list.set(1, "test");

      expect(result).toBe(true);
      expect(list.get(1).val).toBe("test");
    });

    test("returns false if the given index does not exist in the list", () => {
      const list = new SinglyLinkedList();

      const result = list.set(1);

      expect(result).toBe(false);
    });
  });

  describe("insert", () => {
    test("returns false if the index is less than zero or greater than the length", () => {
      const list = buildList(3);

      const res1 = list.insert(-1, "test");
      const res2 = list.insert(4, "test");

      expect(res1).toBe(false);
      expect(res2).toBe(false);
    });

    test("returns true and adds the value to the end of the list", () => {
      const list = buildList(3);

      const res = list.insert(3, "test");

      expect(res).toBe(true);
      expect(list.tail.val).toBe("test");
      expect(list.length).toBe(4);
    });

    test("returns true and adds the value to the beginning of the list", () => {
      const list = buildList(3);

      const res = list.insert(0, "test");

      expect(res).toBe(true);
      expect(list.head.val).toBe("test");
      expect(list.length).toBe(4);
    });

    test("returns true and adds the value at the specified index", () => {
      const list = buildList(3);

      const res = list.insert(1, "test");

      expect(res).toBe(true);
      expect(list.get(1).val).toBe("test");
      expect(list.get(1).next.val).toBe(2);
      expect(list.get(0).next.val).toBe("test");
      expect(list.length).toBe(4);
    });
  });

  describe("remove", () => {
    test("returns undefined if the index is less than zero or greater than or equal to the length", () => {
      const list = buildList(3);

      const res1 = list.remove(-1);
      const res2 = list.remove(3);

      expect(res1).toBe(undefined);
      expect(res2).toBe(undefined);
    });

    test("deletes the node at the given index and returns the deleted node", () => {
      const list = buildList(3);

      const res = list.remove(1);
      list.remove(1);
      list.remove(0);

      expect(list.length).toBe(0);
      expect(res.val).toBe(2);
    });
  });

  describe("reverse", () => {
    test("returns the list if it's empty or has a length of one", () => {
      const list1 = new SinglyLinkedList();
      const list2 = buildList(1);

      const res1 = list1.reverse();
      const res2 = list2.reverse();

      expect(res1.head).toBe(null);
      expect(res1.tail).toBe(null);
      expect(res1.length).toBe(0);

      expect(res2.head.val).toBe(1);
      expect(res2.tail.val).toBe(1);
      expect(res2.length).toBe(1);
    });

    test("it reverses the list", () => {
      const list = buildList(4);

      list.reverse();

      expect(list.head.val).toBe(4);
      expect(list.head.next.val).toBe(3);
      expect(list.head.next.next.val).toBe(2);
      expect(list.tail.val).toBe(1);
      expect(list.length).toBe(4);
    });
  });
});
