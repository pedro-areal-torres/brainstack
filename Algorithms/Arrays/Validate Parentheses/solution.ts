class Solution004 {
  isValid(s: string) {
    if (s.length % 2 !== 0) {
      return false;
    }

    const parenthesesMap = new Map([
      [")", "("],
      ["}", "{"],
      ["]", "["],
    ]);
    const stack = new Array();

    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (parenthesesMap.has(char)) {
        if (stack[stack.length - 1] === parenthesesMap.get(char)) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(char);
      }
    }

    if (stack.length !== 0) {
      return false;
    }

    return true;
  }
}
