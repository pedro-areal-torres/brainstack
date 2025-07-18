class LinkedNode {
  value: number;
  next: LinkedNode | null;

  constructor(value: number, nextNode: LinkedNode | null = null) {
    this.value = value;
    this.next = nextNode;
  }
}

class LinkedList {
  private head: LinkedNode;
  private tail: LinkedNode;

  constructor() {
    this.head = new LinkedNode(-1);
    this.tail = this.head;
  }

  get(index: number): number {
    let curr = this.head.next;
    let i = 0;
    while (curr) {
      if (i === index) {
        return curr.value;
      }
      i++;
      curr = curr.next;
    }
    return -1;
  }

  insertHead(val: number): void {
    const newHead = new LinkedNode(val);
    newHead.next = this.head.next;
    this.head.next = newHead;

    if (!newHead.next) {
      this.tail = newHead;
    }
  }

  insertTail(val: number): void {
    const newTail = new LinkedNode(val);
    this.tail.next = newTail;
    this.tail = newTail;
  }

  remove(index: number): boolean {
    if (index < 0 || this.head === null) {
      return false;
    }

    let i = 0;
    let curr: LinkedNode | null = this.head;
    let prev: LinkedNode | null = null;

    while (i <= index && curr) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    if (curr && prev) {
      if (curr === this.tail) {
        this.tail = prev;
        prev.next = null;
      } else {
        prev.next = curr.next;
      }

      if (this.head.next === null) {
        this.tail = this.head;
      }

      return true;
    }

    return false;
  }

  getValues(): number[] {
    const values: number[] = [];
    let curr = this.head.next;

    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }

    return values;
  }
}
