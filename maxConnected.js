/* 
  Problem: find max count of connected cells in same color.
  Complexity:
    Time: O(n*m)
    Space: O(n*m)
*/
class Solution {
  #getConnectedCells(grid, x, y) {
    const color = grid[y][x];
    const directions = [
      [1, 0],
      [0, -1],
      [-1, 0],
      [0, 1],
    ];
    const connectedCells = [];
    directions.forEach(([dx, dy]) => {
      const px = x + dx;
      const py = y + dy;
      if (
        px >= 0 &&
        py >= 0 &&
        px < grid[0].length &&
        py < grid.length &&
        color === grid[py][px]
      ) {
        connectedCells.push([px, py]);
      }
    });
    return connectedCells;
  }

  #traverse(grid, x, y, visited) {
    const key = `${x},${y}`;
    if (visited.has(key)) {
      return 0;
    }
    visited.add(key);

    const connectedCells = this.#getConnectedCells(grid, x, y);
    return connectedCells.reduce(
      (sum, [px, py]) => sum + this.#traverse(grid, px, py, visited),
      1
    );
  }

  #traverseIterative(grid, startX, startY, visited) {
    const stack = [[startX, startY]];
    let sum = 0;
    while (stack.length) {
      const [x, y] = stack.pop();
      const key = `${x},${y}`;
      if (visited.has(key)) {
        continue;
      }
      sum += 1;
      visited.add(key);
      const connectedCells = this.#getConnectedCells(grid, x, y);
      connectedCells.forEach((point) => stack.push(point));
    }
    return sum;
  }

  #traverseIterativeBFS(grid, startX, startY, visited) {
    const queue = [[startX, startY]];
    let sum = 0;
    visited.add(`${startX},${startY}`);

    while (queue.length) {
      const [x, y] = queue.shift();
      sum += 1;
      const connectedCells = this.#getConnectedCells(grid, x, y);
      connectedCells.forEach(([px, py]) => {
        const key = `${px},${py}`;
        if (!visited.has(key)) {
          queue.push([px, py]);
          visited.add(key);
        }
      });
    }
    return sum;
  }

  maxConnected(grid) {
    let maxCount = 0;
    const visited = new Set();
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        // const count = this.#traverse(grid, x, y, visited);
        // const count = this.#traverseIterative(grid, x, y, visited);
        const count = this.#traverseIterativeBFS(grid, x, y, visited);
        maxCount = Math.max(maxCount, count);
      }
    }
    return maxCount;
  }
}

const grid = [
  ["a", "a", "b", "b"],
  ["b", "a", "c", "c"],
  ["a", "a", "b", "b"],
];
const solution = new Solution();
const result = solution.maxConnected(grid);
console.log(result);
