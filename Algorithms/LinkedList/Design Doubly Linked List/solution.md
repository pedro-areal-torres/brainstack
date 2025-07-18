# Design Doubly Linked List

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)
4. [Operation Complexities](#operation-complexities)

---

## Problem Overview

[Link to the problem](https://leetcode.com/problems/design-linked-list/)

---

## My Thoughts and Struggles

This was a challenging problem due to all the edge cases involved.  
I struggled especially with:

- Making insertions and deletions near the ends or when the list is empty.
- Properly updating the `prev` and `next` pointers without breaking the list.

To simplify everything, I decided to use **dummy head and tail nodes** (sentinels).  
That way, there’s always a node before the first element and after the last one, so I never need to worry about `null` checks in the middle of logic.

Another optimization was to **traverse from head or tail** depending on the index location.  
This halves the number of operations on average when accessing or modifying the list.

---

## Solution Approach

### Sentinel Node Pattern

- `head` and `tail` are dummy nodes.
- Real elements are always between `head.next` and `tail.prev`.
- `size` tracks the current number of elements.

### Key Idea

- Use the helper function `insertAfter(node, newNode)` to abstract node insertion logic.
- When traversing for `get`, `addAtIndex`, or `deleteAtIndex`, optimize by choosing the direction (from `head` or `tail`) based on the index.

---

## Operation Complexities

| Operation          | Time Complexity | Space Complexity |
| ------------------ | --------------- | ---------------- |
| `get(index)`       | O(n)            | O(1)             |
| `addAtHead(val)`   | O(1)            | O(1)             |
| `addAtTail(val)`   | O(1)            | O(1)             |
| `addAtIndex(i,v)`  | O(n)            | O(1)             |
| `deleteAtIndex(i)` | O(n)            | O(1)             |

> **Note**:  
> The time complexity for `get`, `addAtIndex`, and `deleteAtIndex` is `O(n)` in the worst case,  
> but traversal is optimized to `O(n/2)` by starting from `head` or `tail` based on the index.
