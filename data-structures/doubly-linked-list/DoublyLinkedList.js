import Node from "./Node";

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    if (value !== undefined) {
      const node = new Node(value);

      if (this.length === 0 && !this.head && !this.tail) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      }

      this.length += 1;
    }
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTailNode = poppedNode.previous;
      poppedNode.previous = null;
      newTailNode.next = null;
      this.tail = newTailNode;
    }

    this.length -= 1;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    const shiftedNode = this.head;
    const newHeadNode = shiftedNode.next;

    if (newHeadNode) {
      this.head = shiftedNode.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    shiftedNode.next = null;

    this.length -= 1;
    return shiftedNode;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
    }

    this.head = node;
    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const mid = Math.floor(this.length / 2);
    const traverseFromHead = index <= mid;
    const nextNodeProperty = traverseFromHead ? "next" : "previous";
    let currentNode = traverseFromHead ? this.head : this.tail;

    const checkCondition = (iteration) => {
      return traverseFromHead
        ? iteration < index
        : iteration < this.length - index;
    };

    for (let i = traverseFromHead ? 0 : 1; checkCondition(i); i++) {
      currentNode = currentNode[nextNodeProperty];
    }

    return currentNode;
  }
}

export default DoublyLinkedList;
