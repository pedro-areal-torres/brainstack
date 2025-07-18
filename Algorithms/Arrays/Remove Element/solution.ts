class Solution002 {
  removeElement(nums: number[], val: number) {
    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[pointer] = nums[i];
        pointer++;
      }
    }
    return pointer;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
