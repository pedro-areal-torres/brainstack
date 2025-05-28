# Design Singly Linked List

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)
4. [Operation Complexities](#operation-complexities)

---

## Problem Overview

[Link to the problem](https://neetcode.io/problems/singlyLinkedList)

Design a singly linked list with the following methods:

- `get(index)`: Get the value of the node at the given index.
- `insertHead(val)`: Add a node of value `val` before the first element.
- `insertTail(val)`: Append a node of value `val` to the end.
- `remove(index)`: Delete the node at the given index.
- `getValues()`: Return all elements as an array.

---

## My Thoughts and Struggles

This problem had a lot of edge cases to consider.  
One of my initial challenges was in the constructor I expected to initialize the list with a value, but later realized that using a **dummy node with `-1`** as the head simplified insertions and deletions.

The `remove()` method was the trickiest:

- I needed to **track both `prev` and `curr`** to perform the deletion.
- Handling the case when the node being deleted is the **tail** required manually updating the `tail` pointer.
- I had to ensure that removing the **last node** correctly reset the tail and didn’t break the structure.

---

## Solution Approach

### Dummy Head Pattern

- The list starts with a dummy node with value `-1`. This makes edge cases like inserting or removing the first real node easier to handle.

### Core Methods

- `get(index)`: Linear traversal until the index is reached.
- `insertHead(val)`: Insert after the dummy node.
- `insertTail(val)`: Use the `tail` pointer to append efficiently.
- `remove(index)`: Track `prev` and `curr` to unlink the node.
- `getValues()`: Traverse the list and collect values into an array.

---

## Operation Complexities

| Operation         | Time Complexity | Space Complexity | Notes                                      |
| ----------------- | --------------- | ---------------- | ------------------------------------------ |
| `get(index)`      | O(n)            | O(1)             | Traverses the list to find the index       |
| `insertHead(val)` | O(1)            | O(1)             | Always inserts after dummy node            |
| `insertTail(val)` | O(1)            | O(1)             | Uses tail pointer for constant-time insert |
| `remove(index)`   | O(n)            | O(1)             | Linear scan to find the node, then remove  |
| `getValues()`     | O(n)            | O(n)             | Builds a result array from list values     |
