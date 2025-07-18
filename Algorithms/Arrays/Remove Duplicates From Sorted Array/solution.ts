class Solution001 {
  removeDuplicates(nums: number[]): number {
    let uniqueValues = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[uniqueValues] = nums[i];
        uniqueValues++;
      }
    }

    return uniqueValues;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
