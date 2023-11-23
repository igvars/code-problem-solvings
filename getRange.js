// time: O(log(n))
// space: O(1)
function binarySearch(arr, low, high, target, findFirst) {
  if (high < low) {
    return -1;
  }
  const mid = low + Math.floor((high - low) / 2);
  if (findFirst) {
    if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      return binarySearch(arr, mid + 1, high, target, findFirst);
    } else {
      return binarySearch(arr, low, mid - 1, target, findFirst);
    }
  } else {
    if (
      (mid === arr.length - 1 || target < arr[mid + 1]) &&
      arr[mid] === target
    ) {
      return mid;
    }
    if (target < arr[mid]) {
      return binarySearch(arr, low, mid - 1, target, findFirst);
    } else {
      return binarySearch(arr, mid + 1, high, target, findFirst);
    }
  }
}

function binarySearchIterative(arr, low, high, target, findFirst) {
  while (true) {
    if (high < low) {
      return -1;
    }
    const mid = low + Math.floor((high - low) / 2);
    if (findFirst) {
      if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
        return mid;
      }
      if (target > arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (
        (mid === arr.length - 1 || target < arr[mid + 1]) &&
        arr[mid] === target
      ) {
        return mid;
      }
      if (target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
}

function getRange(arr, target) {
  const first = binarySearch(arr, 0, arr.length - 1, target, true);
  const last = binarySearch(arr, 0, arr.length - 1, target, false);
  return [first, last];
}
function getRangeI(arr, target) {
  const first = binarySearchIterative(arr, 0, arr.length - 1, target, true);
  const last = binarySearchIterative(arr, 0, arr.length - 1, target, false);
  return [first, last];
}
function getRange3(arr, target) {
  const first = arr.findIndex((el) => el === target);
  const last = arr.findLastIndex((el) => el === target);
  return [first, last];
}
function getRange4(arr, target) {
  let first = null;
  let last = null;
  for (let i = 0; i < arr.length; i++) {
    if (!first && (arr[i - 1] !== target || arr[i] === target)) {
      first = i;
    }
    if (!last && (arr[i + 1] !== target || i === arr.length - 1)) {
      last = i;
    }
  }
  return [first, last];
}
const arr = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
const x = 9;
// console.log(getRange4(new Array(10 ** 8).fill(9), x));
// console.log(getRange3(new Array(10 ** 8).fill(9), x));
console.log(getRangeI(new Array(10 ** 8).fill(9), x));
