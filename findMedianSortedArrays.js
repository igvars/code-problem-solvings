/**
 * Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    arr.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    arr.push(nums2[j]);
    j++;
  }
  return arr.length % 2 === 0
    ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    : arr[Math.floor(arr.length / 2)];
};

const testCases = [
  {
    input: [[1, 3], [2]],
    output: 2,
  },
  {
    input: [
      [1, 2],
      [3, 4],
    ],
    output: 2.5,
  },
];

for (const testCase of testCases) {
  const result = findMedianSortedArrays(testCase.input[0], testCase.input[1]);
  console.assert(
    result === testCase.output,
    `Input: [${testCase.input}], Expected: ${testCase.output}, Received: ${result}`
  );
}
