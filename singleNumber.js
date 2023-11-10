/*
    Problem: 
    Given a list of numbers, where every number shows up twice except for one number, find that one number.
*/
const testCases = [
  {
    input: [4, 3, 2, 4, 1, 3, 2],
    output: 1,
  },
  {
    input: [2, 2, 1],
    output: 1,
  },
  {
    input: [1, 2, 2],
    output: 1,
  },
  {
    input: [1],
    output: 1,
  },
  {
    input: [13, 13, 16],
    output: 16,
  },
];

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

testCases.forEach(({ input, output }) => {
  const result = singleNumber(input);
  console.assert(result === output, input);
});

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

testCases.forEach(({ input, output }) => {
  const result = singleNumber2(input);
  console.assert(result === output, input);
});
