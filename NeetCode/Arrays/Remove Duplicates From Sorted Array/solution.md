# Remove Duplicates from Sorted Array

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)

---

## Problem Overview

[Link to the problem](https://neetcode.io/problems/remove-duplicates-from-sorted-array)

Given a sorted array `nums`, remove the duplicates **in-place** such that each element appears only once and return the new length. The relative order of the elements should be kept the same.

---

## My Thoughts and Struggles

This was a straightforward problem.  
Since the array is sorted, I knew I could use two pointers to shift unique values to the front as I iterate.

---

## Solution Approach

### Two-Pointer Technique

- Use one pointer (`uniqueValues`) to track where to write the next unique element.
- Iterate over the array with a second pointer (`i`), and every time you find a new value (not equal to the previous), write it at `nums[uniqueValues]` and increment `uniqueValues`.

---

### Complexity

- **Time Complexity**: `O(n)`  
  You iterate once through the array.

- **Space Complexity**: `O(1)`  
  You modify the array in place using a constant number of variables.
