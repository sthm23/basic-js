const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink( value ) {
    let str = '' + value;
    this.arr.push(str);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !(position > 0 && position < this.arr.length)
    ) {
      this.deleteChain();
      throw new Error(`You can't remove incorrect link!`);
    } 
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  deleteChain(){
    return this.arr = [];
  },
  finishChain() {
    arr2 = this.arr.map(item=>`( ${item} )`);
    this.deleteChain();
    return arr2.join('~~');
  }
};
console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())
module.exports = {
  chainMaker
};
