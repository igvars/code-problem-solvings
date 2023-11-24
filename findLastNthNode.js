class Node {
  constructor(val, node) {
    this.val = val;
    this.next = node ?? null;
  }
}

const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

function findLastNthNode(head, n) {
  if (n < 0) {
    return null;
  }
  let i = 0;
  let current = head;
  let resultPointer = null;
  while (current) {
    i += 1;
    if (i > n) {
      resultPointer = resultPointer ? resultPointer.next : head;
    }
    if (current.next === null) {
      return resultPointer;
    }
    current = current.next;
  }
  return resultPointer;
}

console.log(findLastNthNode(list, 2));
