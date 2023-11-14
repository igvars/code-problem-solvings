/**
 * Problem: https://leetcode.com/problems/zigzag-conversion/
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows = Array(numRows).fill("");
  let currentRow = 0;
  let direction = -1;
  for (let char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      direction = -direction;
    }

    currentRow += direction;
  }

  return rows.join("");
};

const result = convert("PAYPALISHIRING", 3);
console.assert(result === "PAHNAPLSIIGYIR");
