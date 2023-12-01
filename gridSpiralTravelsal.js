// Problem:
// You are given a 2D array of integers. Print out the clockwise spiral traversal of the matrix.
// Complexity:
// Time: O(n * m)
// Space: O(n * m)
function gridSpiralTravelsal(arr) {
  const spiral = [];
  let top = 0;
  let bottom = arr.length - 1;
  let left = 0;
  let right = arr[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let i = left; i <= right; i++) {
      spiral.push(arr[top][i]);
    }
    top++;

    // Traverse right column
    for (let i = top; i <= bottom; i++) {
      spiral.push(arr[i][right]);
    }
    right--;

    // Traverse bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiral.push(arr[bottom][i]);
      }
      bottom--;
    }

    // Traverse left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiral.push(arr[i][left]);
      }
      left++;
    }
  }

  return spiral;
}

const grid = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
const grid2 = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
];
const grid3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const grid4 = [[1]];
console.log(gridSpiralTravelsal(grid));
