class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution005 {
  reverseList(head: ListNode) {
    if (!head) {
      return null;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr) {
      let tmpNextValue: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tmpNextValue;
    }
    return prev;
  }
}
