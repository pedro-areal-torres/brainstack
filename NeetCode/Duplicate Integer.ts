// Time Complexity: O(n)
// Space Complexity: O(n)

class SolutionDI {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen: Set<number> = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true; // Duplicate found, exit early
            }
            seen.add(num);
        }
        return false; // No duplicates found
    }
}