// time: O(max(n | m))
// space: O(n + m + max(n | m))

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(list1, list2) {
  let c = 0;
  let a = list1;
  let b = list2;
  let list3 = new Node(0);
  let current = list3;

  while (a || b) {
    const sum = a.val + b.val + c;
    c = Math.floor(sum / 10);

    current.next = new Node(sum % 10);
    current = current.next;

    if (a.next || b.next) {
      if (!a.next) {
        a.next = new Node(0);
      }
      if (!b.next) {
        b.next = new Node(0);
      }
    } else if (c) {
      current.next = new Node(c);
    }

    a = a.next;
    b = b.next;
  }
  return list3.next;
}

const linkedList1 = new Node(2);
linkedList1.next = new Node(4);
linkedList1.next.next = new Node(3);

const linkedList2 = new Node(5);
linkedList2.next = new Node(6);
linkedList2.next.next = new Node(9);

let answer = addTwoNumbers(linkedList1, linkedList2);

while (answer) {
  console.log(answer.val);
  answer = answer.next;
}
