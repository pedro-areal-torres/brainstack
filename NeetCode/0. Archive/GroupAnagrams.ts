// Complexity: O(n * m) -> n: Num of strings, m: Maximum length of a string
// Space: O(n * m) -> Space for storing the frequency arrays in the hash map

class SolutionGA {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]): string[] {
    const map = new Map();

    for (const str of strs) {
      const charCount = new Array(26).fill(0);

      // Count frequency of each char
      for (const char of str) {
        charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
      }

      // Convert the count frequency to a string and then check on the map
      const key = charCount.join(".");

      console.log(key);
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
    return Array.from(map.values());
  }
}
