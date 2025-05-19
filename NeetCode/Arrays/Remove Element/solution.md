# Remove Element

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)

---

## Problem Overview

[Link to the problem](https://neetcode.io/problems/remove-element)

Given an array `nums` and a value `val`, remove all instances of `val` in-place and return the new length. The order of elements can be changed. It doesn’t matter what you leave beyond the returned length.

---

## My Thoughts and Struggles

This was a straightforward problem.  
I used a two-pointer approach, reusing the same logic pattern from the previous “Remove Duplicates” problem.

---

## Solution Approach

### Two-Pointer Technique

- Use a pointer to track the next valid position.
- Iterate through the array. If the current value is **not** equal to `val`, write it to the pointer position and increment the pointer.
- In the end, the pointer indicates how many valid elements we kept.

---

### Complexity

- **Time Complexity**: `O(n)`  
  Single pass through the array.

- **Space Complexity**: `O(1)`  
  In-place updates with a constant number of variables.
