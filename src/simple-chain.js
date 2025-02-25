const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const arr = [...this.chain];
    if (value === undefined) {
      arr.push("( )");
    } else {
      arr.push(`( ${value} )`);
    }
    this.chain = arr;
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.getLength() ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    const arr = [...this.chain];
    arr.splice(position - 1, 1);
    this.chain = arr;
    return this;
  },
  reverseChain() {
    this.chain = this.chain.slice().reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
