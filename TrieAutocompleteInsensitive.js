class Node {
  constructor() {
    this.children = new Map();
    this.word = null;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  /**
   * Adds a word to the Trie structure.
   * Time: O(n), n - word length
   * Space: O(n*m), n - words count, m - average length of the words
   * @param {string} word - The word to add to the Trie
   * @returns {boolean} - Returns true if word added successfully, false otherwise
   */
  addWord(word) {
    if (typeof word !== "string" || !word) {
      return false;
    }
    let node = this.root;
    for (const c of word.toLowerCase()) {
      if (!node.children.has(c)) {
        node.children.set(c, new Node());
      }
      node = node.children.get(c);
    }
    node.word = word;
    return true;
  }

  /**
   * Depth-first search to find words starting from a given node.
   * @param {Node} node - The starting node for DFS
   * @returns {string[]}
   */
  #dfs(node) {
    if (node.word) {
      return [node.word];
    }
    const words = [];
    node.children.forEach((childNode) => {
      const childWords = this.#dfs(childNode);
      words.push(...childWords);
    });
    return words;
  }

  /**
   * Finds all words in the Trie that match the given prefix.
   * Time: O(n), n - word length
   * Space: O(n*m), n - words count, m - average length of the words
   * @param {string} prefix - The prefix to search for in the Trie
   * @returns {string[]} - Array of words matching the prefix (case-insensitive)
   */
  find(prefix) {
    const node = this.#findNode(prefix);
    return node ? this.#dfs(node) : [];
  }

  /**
   * Finds all words in the Trie that match the given prefix.
   * Time: O(n), n - word length
   * Space: O(n*m), n - words count, m - average length of the words
   * @param {string} prefix - The prefix to search for in the Trie
   * @returns {string[]} - Array of words matching the prefix (case-insensitive)
   */
  findIterative(prefix) {
    const node = this.#findNode(prefix);
    if (!node) {
      return [];
    }
    const stack = [node];
    const words = [];
    while (stack.length) {
      const currentNode = stack.pop();
      if (currentNode.word) {
        words.push(currentNode.word);
      }
      currentNode.children.forEach((childNode) => {
        stack.push(childNode);
      });
    }
    return words;
  }

  /**
   * Finds node in the Trie that match the given prefix.
   * Time: O(n), n - word length
   * Space: O(n*m), n - words count, m - average length of the words
   * @param {string} prefix - The prefix to search for in the Trie
   * @returns {Node|null} - Node matching the prefix (case-insensitive)
   */
  #findNode(prefix) {
    let node = this.root;
    for (const c of prefix.toLowerCase()) {
      if (!node.children.has(c)) {
        return null;
      }
      node = node.children.get(c);
    }
    return node;
  }
}

const trie = new Trie();
const names = ["Albert", "John", "Anna", "Serhii", "Sofiia", "Elsa"];
for (const name of names) {
  trie.addWord(name);
}
console.log(trie.findIterative(""));
