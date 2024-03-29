class Node {
  data;
  next = null;
  prev = null;

  constructor(data) {
    this.data = data;
  }
}
export default class Queue {
  head = null;
  tail = null;
  length = 0;

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }

  get front() {
    return this.length === 0 ? -1 : this.head.data;
  }

  get rear() {
    return this.length === 0 ? -1 : this.tail.data;
  }

  enqueue(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;

    const node = this.head;
    this.head = node.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;

    return node.data;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    const node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
    }
    this.length--;
    return node.data;
  }

  isEmpty() {
    return this.length === 0 ? 1 : 0;
  }

  searchBy(index) {
    if (index < 0 || index >= this.length) return null;

    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; ++i) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; --i) {
        current = current.prev;
      }
    }

    return current;
  }

  popAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      return this.dequeue();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const node = this.searchBy(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return node.data;
  }
}
