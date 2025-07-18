# Valid Parentheses

## Index

1. [Problem Overview](#problem-overview)
2. [My Thoughts and Struggles](#my-thoughts-and-struggles)
3. [Solution Approach](#solution-approach)

---

## Problem Overview

[Link to the problem](https://neetcode.io/problems/validate-parentheses)

Given a string `s` containing just the characters `()[]{}`, determine if the input string is valid.

A string is valid if:

- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Every closing bracket has a corresponding open bracket of the same type.

---

## My Thoughts and Struggles

I initially mapped opening brackets as keys and closing brackets as values.  
But that made it harder to validate the stack top when encountering a closing bracket.  
Switching the map to have **closing brackets as keys** simplified the logic.

Later I realized that a case like `"((("` would wrongly return `true` without a final check.  
So I added a condition to verify that the **stack is empty** at the end.

---

## Solution Approach

### Stack-Based Validation

- Use a map where **closing brackets** are keys and their corresponding opening brackets are values.
- Iterate through the string:
  - If it’s a closing bracket, check if it matches the top of the stack.
  - If it’s an opening bracket, push it onto the stack.
- At the end, if the stack is empty, the parentheses are valid.

---

### Complexity

- **Time Complexity**: `O(n)`  
  Each character is pushed and popped from the stack at most once.

- **Space Complexity**: `O(n)`  
  In the worst case (all opening brackets), the stack holds `n` elements.
