# Merge Two Sorted Linked Lists

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)
4. [Complexity](#complexity)

---

## Problem Overview

[Link to the problem](https://neetcode.io/problems/merge-two-sorted-linked-lists)

You are given the heads of two sorted linked lists, `list1` and `list2`.  
Merge the two lists into one **sorted** linked list and return its head.

---

## My Thoughts and Struggles

At first, I didn’t account for the case when one list is longer than the other.  
I had to add logic after the loop to append the remaining nodes from either list.

I also considered solving it recursively, which would have been shorter and elegant.  
But I chose the iterative solution using a dummy node for better performance and to avoid stack overflow in very long lists.

---

## Solution Approach

### Iterative Merge with Dummy Node

- Create a dummy node to simplify edge cases.
- Use a `tail` pointer to build the merged list step by step.
- Compare current nodes of both lists and link the smaller one to `tail`.
- After one list is exhausted, append the remaining nodes of the other list.

---

## Complexity

- **Time Complexity**: `O(n + m)`  
  Where `n` and `m` are the lengths of `list1` and `list2`. Each node is visited once.

- **Space Complexity**: `O(1)`  
  The merge is done in-place using pointers, without allocating new nodes.
