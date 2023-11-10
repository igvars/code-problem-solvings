/*
    Problem: 
    Given a list of numbers, where every number shows up twice except for one number, find that one number.
*/

/* 
    time: O(n)
    space: O(1)
*/
function singleNumber(arr) {
  let result = 0;

  for (let num of arr) {
    result ^= num;
  }

  return result;
}

/* 
    time: O(n)
    space: O(n)
*/
function singleNumber2(arr) {
  const hash = new Map();

  for (let num of arr) {
    if (hash.has(num)) {
      hash.delete(num);
    } else {
      hash.set(num, true);
    }
  }
  return hash.keys().next().value;
}

const testCases = [
  { input: [0, 1, 1], output: 0 },
  { input: [1], output: 1 },
  { input: [2, 2, 1], output: 1 },
  { input: [1, 2, 2], output: 1 },
  { input: [4, 1, 2, 1, 2], output: 4 },
  { input: [4, 3, 2, 4, 1, 3, 2], output: 1 },
  { input: [7, 3, 5, 3, 5], output: 7 },
  { input: [11, 9, 11, 7, 9], output: 7 },
  { input: [3, 1, 4, 2, 4, 1, 2], output: 3 },
  { input: [-1, -2, -2, -3, -3], output: -1 },
];

for (const testCase of testCases) {
  const result = singleNumber(testCase.input);
  console.assert(
    result === testCase.output,
    `Input: [${testCase.input}], Expected: ${testCase.output}, Received: ${result}`
  );
}
