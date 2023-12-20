class Node {
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  /* 
    Time: O(m), 
        m - length of the word
    Space O(n * m),
        n - words count
        m - characters in Trie
   */
  addWord(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new Node());
      }
      node = node.children.get(c);
    }
    node.isWord = true;
  }

  #dfs(node, prefix) {
    if (node.isWord) {
      return [prefix];
    }
    const words = [];
    node.children.forEach((childNode, key) => {
      const childWords = this.#dfs(childNode, prefix + key);
      words.push(...childWords);
    });
    return words;
  }

  /* 
    Time: O(m), 
        m - length of the word
    Space O(n * m),
        n - words count
        m - characters in Trie
   */
  find(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) {
        return [];
      }
      prefix += c;
      node = node.children.get(c);
    }
    return this.#dfs(node, prefix);
  }

  /* 
    Time: O(m), 
        m - length of the word
    Space O(n * m),
        n - words count
        m - characters in Trie
   */
  findIterative(word) {
    let prefix = "";
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) {
        return [];
      }
      prefix += c;
      node = node.children.get(c);
    }
    const stack = [{ node, prefix }];
    const result = [];
    while (stack.length) {
      const { node, prefix } = stack.pop();
      if (node.isWord) {
        result.push(prefix);
      }
      node.children.forEach((childNode, key) => {
        stack.push({ node: childNode, prefix: prefix + key });
      });
    }
    return result;
  }
}

const trie = new Trie();
const names = ["Albert", "John", "Anna", "Serhii", "Sofiia", "Elsa"];
for (const name of names) {
  trie.addWord(name);
}
console.log(trie.findIterative("E"));
