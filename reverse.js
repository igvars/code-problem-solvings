/**
 * Problem: https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0;
  }
  let s = "";
  if (x < 0) {
    s = "-";
    x = -x;
  }

  while (x) {
    s += x % 10;
    x = Math.floor(x / 10);
  }
  console.log();
  const result = parseInt(s, 10);
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  } else {
    return result;
  }
};

const testCases = [
  {
    input: 123,
    output: 321,
  },
  {
    input: -123,
    output: -321,
  },
  {
    input: 120,
    output: 21,
  },
  {
    input: 0,
    output: 0,
  },
  {
    input: 1534236469,
    output: 0,
  },
];

for (const testCase of testCases) {
  const result = reverse(testCase.input, testCase.input);
  console.assert(
    result === testCase.output,
    `Input: [${testCase.input}], Expected: ${testCase.output}, Received: ${result}`
  );
}
