// Problem:
// Generate a 2D array of integers in the clockwise spiral traversal order.
// Complexity:
// Time: O(n * m)
// Space: O(n * m)
function gridSpiralGenerate(n, m) {
  const spiral = Array.from({ length: n }, () => Array(m).fill(0));

  let top = 0;
  let right = m - 1;
  let bottom = n - 1;
  let left = 0;

  let counter = 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      spiral[top][i] = counter++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiral[i][right] = counter++;
    }
    right--;

    // edge case: only one column or row
    if (counter > n * m) {
      break;
    }

    for (let i = right; i >= left; i--) {
      spiral[bottom][i] = counter++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      spiral[i][left] = counter++;
    }
    left++;
  }
  return spiral;
}

console.log(gridSpiralGenerate(4, 4));
