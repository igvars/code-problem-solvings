class Animal {
  /**
   * @param {string} item
   * @return {boolean}
   */
  eat(item) {}
}

/**
 * @implements {Animal}
 */
class Cat extends Animal {
  /**
   * @param {string} item
   * @return {boolean}
   */
  eat(item) {
    return item == "meat";
  }
}

/**
 * @implements {Animal}
 */
class Dog extends Animal {
  /**
   * @param {string} item
   * @return {boolean}
   */
  eat(item) {
    return item == "bone";
  }
}

/**
 * @implements {Animal}
 */
class Bird extends Animal {
  /**
   * @param {string} item
   * @return {boolean}
   */
  eat(item) {
    return item == "seed";
  }
}

class Cafe {
  /**
   * @param {Animal} a
   * @return {boolean}
   */
  feed(a) {
    return a.eat("meat");
  }
}

const c = new Cafe();
const a = new Cat();
console.log(c.feed(a));
