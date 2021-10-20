import Node from "./Node";

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.last = node;
    } else {
      node.next = this.first;
    }

    this.first = node;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return 0;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return this.length;
  }
}

export default Stack;
