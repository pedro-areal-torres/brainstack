// Time Complexity: O(n)
// Space Complexity: O(n)

class SolutionVA {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false;
        }

        const charCount: {[key: string]: number} = {};
        for(let char of s) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        for(let char of t) {
            if(!charCount[char]) {
                return false;
            }
            charCount[char]--;
        }
        
        return true;
    }
}
