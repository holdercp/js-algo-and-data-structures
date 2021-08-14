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
}

export default DoublyLinkedList;
