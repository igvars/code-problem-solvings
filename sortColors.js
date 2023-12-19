/*
    Problem:
    Given an array with n objects colored red, white or blue, sort them in-place 
    so that objects of the same color are adjacent, with the colors in the order red, white and blue.
    Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
    Note: You are not suppose to use the library’s sort function for this problem.
    Complexity:
        Time: O(n)
        Space: O(1)
 */
class Solution {
  sortColors(arr) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    while (left < right) {
      if (arr[mid] === 0) {
        mid++;
        left++;
      }
      if (arr[mid] === 1) {
        [arr[left], arr[mid]] = [arr[mid], arr[left]];
        left++;
      }
      if (arr[mid] === 2) {
        [arr[right], arr[mid]] = [arr[mid], arr[right]];
        right--;
      }
    }
    return arr;
  }
}

const solution = new Solution();
const array = [2, 0, 2, 1, 1, 0];
console.log(solution.sortColors(array));
