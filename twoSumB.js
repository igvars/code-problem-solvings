// time: O(n)
// space: O(n)
function twoSum(arr, target) {
  const hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(target - arr[i])) {
      return [hash.get(target - arr[i]), i];
    }
    hash.set(arr[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 18));
