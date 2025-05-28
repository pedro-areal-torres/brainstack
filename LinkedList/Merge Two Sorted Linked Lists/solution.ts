/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution006 {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    if (!list1) {
      return list2;
    }

    if (!list2) {
      return list1;
    }

    const dummyNode = new ListNode();
    let tail = dummyNode;

    while (list1 && list2) {
      if (list1.val <= list2.val) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }

    if (list1) {
      tail.next = list1;
    } else if (list2) {
      tail.next = list2;
    }

    return dummyNode.next;
  }
}
