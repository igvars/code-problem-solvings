function ransomNote(magazine, note) {
  const letters = new Map();
  for (let l of magazine) {
    if (letters.has(l)) {
      letters.set(l, letters.get(l) + 1);
    } else {
      letters.set(l, 1);
    }
  }
  for (let c of note) {
    if (!letters.has(c) || letters.get(c) <= 0) {
      return false;
    }
    letters.set(c, letters.get(c) - 1);
  }
  return true;
}

console.log(ransomNote(["a", "b", "c", "d", "e", "f"], "bed"));
console.log(ransomNote(["a", "b", "c", "d", "e", "f"], "cat"));
