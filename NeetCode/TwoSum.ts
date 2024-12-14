class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    if (nums.length === 2) {
      return [0, 1];
    }

    const numIndexMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
      const currentValue = nums[i];
      const difference = target - currentValue;

      if (numIndexMap.has(difference)) {
        const differenceIndex = numIndexMap.get(difference);
        if (differenceIndex !== undefined) {
          return [differenceIndex, i];
        }
      }

      numIndexMap.set(currentValue, i);
    }

    return [];
  }
}
