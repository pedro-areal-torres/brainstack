function majorityElement(nums: number[]): number {
  let majorElem;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorElem = nums[i];
    }
    count += nums[i] === majorElem ? 1 : -1;
  }
  return majorElem;
}
