/* 
    Problem: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/?envType=daily-question&envId=2023-12-01
    Complexity:
        Time: O(n + N * M)
        Space: O(n + N * M), where
            n is the length of chars 
            N is the number of words
            M is the average length of the words

*/
function countCharacters(words, chars) {
  const hash = new Map();
  for (let c of chars) {
    hash.set(c, (hash.get(c) || 0) + 1);
  }

  let count = 0;

  for (word of words) {
    const vocabluary = new Map(hash);
    let isTraversed = true;
    for (c of word) {
      if (vocabluary.has(c) && vocabluary.get(c) > 0) {
        vocabluary.set(c, vocabluary.get(c) - 1);
      } else {
        isTraversed = false;
        break;
      }
    }
    if (isTraversed) {
      count += word.length;
    }
  }

  return count;
}

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
