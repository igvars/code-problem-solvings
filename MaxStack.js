/*
    Problem: Implement a class for a stack that supports all the regular functions (push, pop) 
    and an additional function of max() which returns the maximum element in the stack (return null if the stack is empty).
    Each method should run in constant time.

    Solution complexity:
    Time: O(2)
    Space: O(2n)
*/
class MaxStack {
  constructor() {
    this.stack = [];
    this.maxes = [];
  }
  push(val) {
    this.stack.push(val);
    const lastMax = this.maxes[this.maxes.length - 1] ?? null;
    if (val > lastMax) {
      this.maxes.push(val);
    } else {
      this.maxes.push(lastMax);
    }
  }
  pop() {
    this.stack.pop();
    this.maxes.pop();
  }
  max() {
    return this.maxes[this.maxes.length - 1] ?? null;
  }
}

const s = new MaxStack();
console.log(s.max());
s.push(1);
s.push(2);
s.push(3);
s.push(2);
console.log(s.max());
s.pop();
s.pop();
console.log(s.max());
