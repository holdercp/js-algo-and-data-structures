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

    let count = traverseFromHead ? 0 : this.length - 1;
    let currentNode = traverseFromHead ? this.head : this.tail;
    while (count !== index) {
      currentNode = traverseFromHead ? currentNode.next : currentNode.previous;
      count = traverseFromHead ? count + 1 : count - 1;
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const node = this.get(index - 1);
      const newNode = new Node(value);
      const nextNode = node.next;

      node.next = newNode;
      newNode.previous = node;

      newNode.next = nextNode;
      nextNode.previous = newNode;

      this.length++;
    }

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const node = this.get(index);
      const previousNode = node.previous;
      const nextNode = node.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;

      node.next = null;
      node.previous = null;

      this.length--;

      return node;
    }
  }
}

export default DoublyLinkedList;
