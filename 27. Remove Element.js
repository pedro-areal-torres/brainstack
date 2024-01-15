/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const filteredNums = nums.filter((num) => num !== val);
  nums.length = 0;
  filteredNums.map((num) => nums.push(num));
};
