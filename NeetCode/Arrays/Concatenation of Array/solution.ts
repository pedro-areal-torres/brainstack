class Solution003 {
  getConcatenation(nums: number[]) {
    const ans = new Array(nums.length * 2);

    for (let i = 0; i < nums.length; i++) {
      ans[i] = nums[i];
      ans[i + nums.length] = nums[i];
    }

    return ans;
  }
}
