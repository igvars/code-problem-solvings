/* 
  Problem: find max count of connected cells in same color.
  Complexity:
    Time: O(n*m)
    Space: O(n*m)
*/
function maxConnected(grid) {
  const visited = new Set();

  const getConnectedCells = (x, y) => {
    const color = grid[y][x];
    const directions = [
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
    ];
    const connectedCells = [];
    directions.forEach(([dx, dy]) => {
      const cx = x + dx;
      const cy = y + dy;
      if (
        cx >= 0 &&
        cy >= 0 &&
        cx < grid[0].length &&
        cy < grid.length &&
        color === grid[cy][cx]
      ) {
        connectedCells.push([cx, cy]);
      }
    });
    return connectedCells;
  };

  const traverse = (x, y) => {
    const key = `${x},${y}`;
    if (visited.has(key)) {
      return 0;
    }
    visited.add(key);
    const connectedCells = getConnectedCells(x, y);
    return connectedCells.reduce((sum, point) => {
      return sum + traverse(...point);
    }, 1);
  };

  const traverseIterative = (startX, startY) => {
    const stack = [[startX, startY]];
    let sum = 0;
    while (stack.length) {
      const [x, y] = stack.pop();
      const key = `${x},${y}`;
      if (visited.has(key)) {
        continue;
      }
      visited.add(key);
      const connectedCells = getConnectedCells(x, y);
      sum += 1;
      connectedCells.forEach((point) => stack.push(point));
    }
    return sum;
  };

  let maxSum = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      //   const sum = traverse(x, y);
      const sum = traverseIterative(x, y);
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
}

const grid = [
  ["a", "a", "b"],
  ["b", "a", "b"],
  ["b", "a", "a"],
];

console.log(maxConnected(grid));
