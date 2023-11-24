class Node {
  constructor(val, node = null) {
    this.val = val;
    this.next = node;
  }
}
function findCenterNode(list) {
  let slowPtr = list;
  let fastPtr = list;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr;
}

const list = new Node(
  1,
  new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7))))))
);
console.log(findCenterNode(list));
