/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let num in nums2) {
    nums1[m] = nums2[num];
    m++;
  }

  // Order in ascending order
  nums1.sort((a, b) => a - b);
}
