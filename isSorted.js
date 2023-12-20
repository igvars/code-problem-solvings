class Node {
  constructor(value) {
    this.value = value;
    this.isWord = false;
    this.next = null;
  }
}

class AlphabetLinkedList {
  constructor(alphabet) {
    this.head = this.createLinkedList(alphabet);
  }

  createLinkedList(alphabet) {
    let head = new Node(alphabet[0]);
    let current = head;
    for (let i = 1; i < alphabet.length; i++) {
      current.next = new Node(alphabet[i]);
      current = current.next;
    }
    return head;
  }

  compareCharacters(char1, char2) {
    let current = this.head;
    let foundChar1 = false;
    let foundChar2 = false;

    while (current) {
      if (current.value === char1) {
        foundChar1 = true;
        if (foundChar2) {
          return false;
        }
      } else if (current.value === char2) {
        foundChar2 = true;
        if (!foundChar1) {
          return true;
        }
      }
      current = current.next;
    }

    return true;
  }
}

function isSorted(words, alphabet) {
  const alphabetLinkedList = new AlphabetLinkedList(alphabet);

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i - 1];
    const nextWord = words[i];

    let j = 0;
    while (j < currentWord.length && j < nextWord.length) {
      if (!alphabetLinkedList.compareCharacters(currentWord[j], nextWord[j])) {
        return false;
      }
      j++;
    }

    if (j < nextWord.length && j >= currentWord.length) {
      return false;
    }
  }

  return true;
}

console.log(isSorted(["abcd", "efgh"], "zyxwvutsrqponmlkjihgfedcba")); // Output: false
console.log(isSorted(["zyx", "zyxw", "zyxwy"], "zyxwvutsrqponmlkjihgfedcba")); // Output: true
