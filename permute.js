function permute(nums) {
  const result = [];

  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0); // Починаємо з першої позиції
  return result;
}

const inputArray = [1, 2, 3];
const permutations = permute(inputArray);
console.log(permutations);
