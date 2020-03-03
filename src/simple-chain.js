const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;

  },
  addLink(value) {
    this.array.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || position < 1 || !(Number(position))) {
      this.array = [];
      throw new Error();
    } else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let res = this.array.join(("~~"));
    this.array = [];
    return res;
  }
};

module.exports = chainMaker;
