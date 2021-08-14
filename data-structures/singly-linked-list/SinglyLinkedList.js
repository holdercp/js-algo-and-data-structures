import Node from "./Node";

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    let tail = null;
    while (current.next) {
      tail = current;
      current = current.next;
    }

    if (!tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = tail;
      this.tail.next = null;
    }
    this.length -= 1;

    return current;
  }

  shift() {
    if (this.length === 0) return undefined;

    const { head } = this;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length -= 1;

    return head;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;

    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    let node = this.head;
    for (let i = 1; i <= index; i += 1) {
      node = node.next;
    }

    return node;
  }

  set(index, val) {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(val);

    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index - 1);
    const oldNode = node.next;
    const newNext = oldNode.next;
    node.next = newNext;

    this.length -= 1;

    return oldNode;
  }

  reverse() {
    if (this.length <= 1) return this;

    function swap(node, prev) {
      if (!node) return;

      const current = node;
      const { next } = current;
      current.next = prev;

      swap(next, node);
    }

    swap(this.head, null);

    const tailCopy = this.tail;
    this.tail = this.head;
    this.head = tailCopy;

    return this;
  }
}

export default SinglyLinkedList;
