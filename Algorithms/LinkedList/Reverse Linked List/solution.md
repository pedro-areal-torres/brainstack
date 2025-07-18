# Reverse Linked List

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)

---

## Problem Overview

[Link to the problem](https://neetcode.io/problems/reverse-a-linked-list)

Given the `head` of a singly linked list, reverse the list and return its head.

---

## My Thoughts and Struggles

At first, I thought recursion would be the best solution.  
But I realized that while it works, it still has `O(n)` space complexity due to the call stack.

I wanted a more efficient approach and found that a two-pointer solution achieves constant space.  
The tricky part was making sure not to lose the reference to the next node, which I solved by temporarily storing it in a variable.

---

## Solution Approach

### Iterative Two-Pointer Reversal

- Use two pointers: `prev` and `curr`.
- For each node:
  - Store `curr.next` in a temporary variable.
  - Reverse the `next` pointer to point to `prev`.
  - Move both pointers forward.
- At the end, `prev` will be the new head of the reversed list.

---

### Complexity

- **Time Complexity**: `O(n)`  
  You traverse each node once.

- **Space Complexity**: `O(1)`  
  The reversal is done in place with just a few pointer variables.
