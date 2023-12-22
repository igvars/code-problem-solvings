function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function (head) {
  let current = head;
  let reversedList = null;
  while (current) {
    const newNode = new ListNode(current.val, reversedList);
    reversedList = newNode;
    current = current.next;
  }
  return reversedList;
};

var reverseList = function (head) {
  let current = head;
  let prev = null;
  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};

var reverseListRec = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const reversedList = reverseListRec(head.next);
  head.next.next = head;
  head.next = null;

  return reversedList;
};
console.log(reverseListRec(new ListNode(1, new ListNode(2, new ListNode(3)))));
