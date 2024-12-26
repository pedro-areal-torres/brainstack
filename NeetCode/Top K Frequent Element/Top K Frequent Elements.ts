// Do a sort on the array it would increase the complexity to O(n * log n)

class SolutionTopK {
  topKFrequent(nums: number[], k: number): number[] {
    const countMap: Map<number, number> = new Map();

    for (const num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Array of buckets where index represents frequency
    const countBucket: number[][] = Array(nums.length + 1)
      .fill(null)
      .map(() => []);

    // Place 'num' in the bucket corresponding to 'freq'
    for (const [num, freq] of countMap) {
      countBucket[freq].push(num);
    }

    const result: number[] = [];

    // Start from the highest frequency bucket (end of the array)
    // Collect elements until the result contains k elements
    for (let i = countBucket.length - 1; i >= 0 && result.length < k; i--) {
      if (countBucket[i].length > 0) {
        result.push(...countBucket[i]);
      }
    }

    return result;
  }
}
