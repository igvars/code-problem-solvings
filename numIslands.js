function numIslands(grid) {
  if (!grid || !grid[0]) {
    return 0;
  }
  const h = grid.length;
  const w = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let totalCount = 0;

  sinkLand = (grid, row, col) => {
    if (!isLand(grid, row, col)) {
      return;
    }
    grid[row][col] = 0;
    for ([x, y] of directions) {
      sinkLand(grid, row + x, col + y);
    }
  };

  isLand = (grid, row, col) => {
    // edge checks
    if (row < 0 || col < 0 || row > h || col > w) {
      return false;
    }
    if (grid[row][col] === 1) {
      return true;
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (isLand(grid, i, j)) {
        totalCount += 1;
        sinkLand(grid, i, j);
      }
    }
  }

  return totalCount;
}

const grid = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
];

console.log(numIslands(grid));
