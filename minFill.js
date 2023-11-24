function minFills(picture) {
  const rows = picture.length;
  const cols = picture[0].length;
  const visited = new Set();
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const dfs = (row, col, color) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      picture[row][col] !== color ||
      visited.has(`${row}-${col}`)
    ) {
      return;
    }

    visited.add(`${row}-${col}`);
    for ([x, y] of directions) {
      dfs(row + x, col + y, color);
    }
  };

  let fills = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited.has(`${i}-${j}`)) {
        dfs(i, j, picture[i][j]);
        fills += 1;
      }
    }
  }

  return fills;
}

function interactiveMinFills() {
  const picture = ["aabba", "aabba", "aaacb"];

  try {
    const fills = minFills(picture);
    console.log(`Minimum fills required: ${fills}`);
  } catch (error) {
    console.error(error.message);
  }
}

// Call the interactive function
interactiveMinFills();
