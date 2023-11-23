function sortNums(arr) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;
  while (i <= high) {
    if (arr[i] === 1) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low += 1;
      i += 1;
    }
    if (arr[i] === 2) {
      i += 1;
    }
    if (arr[i] === 3) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high -= 1;
    }
  }
  return arr;
}

console.log(sortNums([3, 3, 2, 1, 3, 2, 1]));
