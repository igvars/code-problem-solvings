class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(list) {
  let current = list;
  let prev = null;
  while (current) {
    let tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  return prev;
}

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
console.log(reverseList(list));
