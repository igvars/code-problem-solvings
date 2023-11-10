/**
 * https://leetcode.com/problems/unique-paths-ii/
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // Create a 2D array to store the number of unique paths
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // Initialize the top-left cell
  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

  // Initialize the rest of the dp array
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        // If the current cell is an obstacle, set dp[i][j] to 0
        dp[i][j] = 0;
      } else {
        // Update dp[i][j] based on the cells to the left and above
        if (i > 0) dp[i][j] += dp[i - 1][j];
        if (j > 0) dp[i][j] += dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

const testCases = [
  {
    input: [
      [0, 0, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    output: 1,
  },
  {
    input: [[0, 0]],
    output: 1,
  },
  {
    input: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
    ],
    output: 12,
  },
  {
    input: [[0]],
    output: 1,
  },
  {
    input: [[1]],
    output: 0,
  },
  {
    input: [[0, 1]],
    output: 0,
  },
];

for (const testCase of testCases) {
  const result = uniquePathsWithObstacles(testCase.input);
  console.assert(
    result === testCase.output,
    `Input: [${testCase.input}], Expected: ${testCase.output}, Received: ${result}`
  );
}
