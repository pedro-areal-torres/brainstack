# Concatenation of Array

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)

---

## Problem Overview

[Link to the problem](https://neetcode.io/problems/concatenation-of-array)

Given an integer array `nums` of length `n`, construct an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n`, and return the array.

---

## My Thoughts and Struggles

No struggles on this one.

---

## Solution Approach

### Array Copying

- Create a new array of size `2 * n`.
- Copy the original array into the first half and again into the second half, shifted by `n`.

---

### Complexity

- **Time Complexity**: `O(n)`  
  One full pass to fill the new array.

- **Space Complexity**: `O(n)`  
  A new array of size `2n` is created, but on complexity we ignore the constants, in this case the number `2`.
