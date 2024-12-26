# Top K Frequent Elements

## Index

1. [Problem Overview](#problem-overview)
2. [Solution Approaches](#solution-approaches)
   - [Naive Sorting Solution](#1-naive-sorting-solution)
   - [Heap Solution](#2-heap-solution)
   - [Bucket Sort Solution](#3-bucket-sort-solution-my-implementation)
3. [My Thoughts and Struggles](#my-thoughts-and-struggles)
4. [Understanding Bucket Sort](#understanding-bucket-sort)

---

**_NOTE:_** "Problem" and "Solution Approaches" sections are copied from [NeetCode](https://neetcode.io/problems/top-k-elements-in-list).

---

## Problem Overview

The task is to return the `k` most frequent elements in an integer array `nums`. The solution must be efficient, ideally with `O(n)` time and space complexity.

### Example 1

- **Input**: `nums = [1, 2, 2, 3, 3, 3], k = 2`
- **Output**: `[3, 2]`

### Example 2

- **Input**: `nums = [7, 7], k = 1`
- **Output**: `[7]`

---

## Solution Approaches

### 1. Naive Sorting Solution

- **Steps**:

  1. Count the frequency of each number using a hash map.
  2. Sort the entries in descending order by frequency.
  3. Pick the top `k` elements.

- **Time Complexity**: `O(n log n)` due to sorting.
- **Space Complexity**: `O(n)` for the hash map.

---

### 2. Heap Solution

- **Steps**:

  1. Use a hash map to store frequencies.
  2. Push elements into a min-heap of size `k`.
  3. Maintain the heap with the top `k` elements (smallest frequency at the root).

- **Time Complexity**: `O(n log k)` for maintaining the heap.
- **Space Complexity**: `O(n)` for the map and heap.

---

### 3. Bucket Sort Solution (My Implementation)

- **Steps**:

  1. Count frequencies using a hash map.
  2. Create buckets where the index represents the frequency.
  3. Iterate through the buckets in reverse order to collect the top `k` elements.

- **Time Complexity**: `O(n)`:

  - Frequency counting: `O(n)`
  - Bucket grouping: `O(n)`
  - Bucket traversal: `O(n)` (at worst, when `k = n`).

- **Space Complexity**: `O(n)`:
  - Map: `O(n)`
  - Buckets array: `O(n)`.

---

## My Thoughts and Struggles

When I first approached this problem, I immediately thought of a **sorting-based solution**. However, sorting was suboptimal for large datasets (`O(n log n)`).

I struggled to find a more efficient solution and eventually checked the problem hints and explored the concept of **bucket sort**. This was a new concept for me, and it required researching how bucket sort works and how it could apply to this problem.

---

## Understanding Bucket Sort

### When to Use Bucket Sort

- Typically used when:
  - You need to group data based on some property (e.g., frequency).
  - You have bounded data ranges that allow creating a fixed number of "buckets."
    - In this problem, the frequency of any element is between 1 and `n` (array size).

### Bucket Sort vs Sorting

- **Sorting**:
  - Sorting the array by frequency: `O(n log n)`.
- **Bucket Sort**:
  - Grouping elements by frequency into buckets: `O(n)`.

By creating buckets where the index represents frequency, we can efficiently extract the top `k` elements by iterating over the buckets in reverse order.
