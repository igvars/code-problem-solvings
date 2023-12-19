class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Solution {
  // Time: O(n) Space: O(1)
  print(head) {
    let current = head;
    let result = "";
    while (current) {
      result += current.value;
      current = current.next;
    }
    return result;
  }
  // Time: O(n) Space: O(1)
  reverseIterateInPlace(head) {
    let current = head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return head;
  }
  // Time: O(n) Space: O(n)
  reverseIterate(head) {
    let current = head;
    let result = null;
    while (current) {
      if (!result) {
        result = new Node(current.value);
      } else {
        result = new Node(current.value, result);
      }
      current = current.next;
    }
    return result;
  }

  #reverseHelper(node, state) {
    if (!node) {
      return state;
    }
    const newState = new Node(node.value, state);
    return this.#reverseHelper(node.next, newState);
  }
  // Time: O(n) Space: O(n)
  reverse(head) {
    const state = null;
    return this.#reverseHelper(head, state);
  }

  remove(head, value) {
    let current = head;
    if (curent.value === value) {
      current.next = current.next.next;
    }
    while (current && current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }

  oddEvenTransform(head) {
    let odd = head;
    let even = head.next;
    const evenHead = even;
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
    return head;
  }

  isPalindrome(head) {
    let reversed = this.reverseIterateInPlace(head);
    let current = head;
    let isPalindrome = true;
    while (current) {
      if (current.value !== reversed.value) {
        isPalindrome = false;
        break;
      }
      current = current.next;
      reversed = reversed.next;
    }
    return isPalindrome;
  }
}

const solution = new Solution();
const linkedList = new Node(1, new Node(2, new Node(2), new Node(3)));
console.log(solution.isPalindrome(linkedList));
