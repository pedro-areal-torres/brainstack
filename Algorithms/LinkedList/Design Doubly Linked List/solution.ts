class NodeDL {
  val: number;
  next: NodeDL | null = null;
  prev: NodeDL | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

class MyLinkedList {
  private head: NodeDL;
  private tail: NodeDL;
  private size: number;

  constructor() {
    this.head = new NodeDL(0);
    this.tail = new NodeDL(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;

    let curr: NodeDL;
    if (index < this.size / 2) {
      curr = this.head.next!;
      for (let i = 0; i < index; i++) {
        curr = curr.next!;
      }
    } else {
      curr = this.tail.prev!;
      for (let i = this.size - 1; i > index; i--) {
        curr = curr.prev!;
      }
    }

    return curr.val;
  }

  addAtHead(val: number): void {
    this.insertAfter(this.head, new NodeDL(val));
  }

  addAtTail(val: number): void {
    this.insertAfter(this.tail.prev!, new NodeDL(val));
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;

    let curr: NodeDL;
    if (index < this.size / 2) {
      curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next!;
      }
    } else {
      curr = this.tail;
      for (let i = this.size; i > index; i--) {
        curr = curr.prev!;
      }
    }

    this.insertAfter(curr, new NodeDL(val));
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    let curr: NodeDL;
    if (index < this.size / 2) {
      curr = this.head.next!;
      for (let i = 0; i < index; i++) {
        curr = curr.next!;
      }
    } else {
      curr = this.tail.prev!;
      for (let i = this.size - 1; i > index; i--) {
        curr = curr.prev!;
      }
    }

    curr.prev!.next = curr.next;
    curr.next!.prev = curr.prev;
    this.size--;
  }

  private insertAfter(prevNode: NodeDL, newNode: NodeDL): void {
    const nextNode = prevNode.next!;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.size++;
  }
}
