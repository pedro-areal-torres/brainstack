function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;

  let j = 1;

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
}
