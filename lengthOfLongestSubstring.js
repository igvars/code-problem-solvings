/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hash = new Map();
  let max = 0;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    if (hash.has(s[j])) {
      i = Math.max(hash.get(s[j]) + 1, i);
    }

    hash.set(s[j], j);
    max = Math.max(max, j - i + 1);
  }

  return max;
};

const testCases = [
  { input: " ", output: 1 },
  { input: "abcabcbb", output: 3 },
  { input: "bbbbb", output: 1 },
  { input: "pwwkew", output: 3 },
  { input: "dvdf", output: 3 },
];

for (const testCase of testCases) {
  const result = lengthOfLongestSubstring(testCase.input);
  console.assert(
    result === testCase.output,
    `Input: [${testCase.input}], Expected: ${testCase.output}, Received: ${result}`
  );
}
