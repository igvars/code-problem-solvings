/* 
    Problem: You are given an array of integers. 
        Return the largest product that can be made by multiplying any 3 integers in the array.

    Complexity:
        Time: O(n*log(n))
        Space: O(1)
*/
function maximumProductOfThree(arr) {
  if (arr.length < 3) {
    return null;
  }

  arr.sort((a, b) => a - b);

  const n = arr.length - 1;
  const max1 = arr[0] * arr[1] * arr[n];
  const max2 = arr[n - 2] * arr[n - 1] * arr[n];

  return Math.max(max1, max2);
}

console.log(maximumProductOfThree([-4, 2, 8, -4]));
