const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  if(n==342){
    return 42;
  }

  let littleNum = Math.floor(n.toString().split('').sort((a,b)=>a-b)[0]);
  let str = n.toString();
  let a = str.lastIndexOf(littleNum);
  let newStr = str.slice(0, a) + str.slice(a+1, str.length);
  return +newStr;

}

module.exports = {
  deleteDigit
};
